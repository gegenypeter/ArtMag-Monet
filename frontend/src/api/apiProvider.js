import { useState, useEffect } from "react";
import axios from "axios";

const mainUrls = {
	search: "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&artisOrCulture",
	object: "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
  };

const itemsPerPage = 8;

export const getArtworkData = async (objectID, detailed = true) => {
	const {data} = await axios.get(mainUrls.object.concat(objectID.toString()));
	
	let result;
	if (detailed) {
		result =
		{
			id: objectID,
			title: data.title,
			period: data.period,
			artist:
			{
				name: data.artistDisplayName,
				born: data.artistBeinDate,
				died: data.artistEndDate,
				more: data.artistWikidata_URL
			},
			dimensions: data.dimensions,
			creationYear: data.objectEndDate,
			city: data.city,
			country: data.country,
			rights: data.rightsAndReproduction,
			image: {
				large: data.primaryImage,
				small: data.primaryImageSmall
			}
		}
	} else {
		result =
		{
			id: objectID,
			title: data.title,
			artist: data.artistDisplayName,
			image: data.primaryImageSmall
		}
	}
	return result;
}

export const getResultSet = async (query) => {
	if (!query) query = "monet";
	const {data: {objectIDs}} = await axios.get(mainUrls.search.concat("&q=", query));
	return	 objectIDs;
}

export const getArtworkPageData = async (objctIDsPage) => {
	const pageData = [];
	for (const objectID of objctIDsPage) {
		const artwork = await getArtworkData(objectID, false);
		pageData.push(artwork);
	}
	return pageData;
}

// ======================================

export const useArtworks = (initSearchExpr) => {
	
	const [hasMorePage, setHasMorePage] = useState(false);
	const [searchExpr, setSearchExpr] = useState(initSearchExpr);
	const [artworks, setArtworks] = useState([]);
	const [objectIDs, setObjectIDs] = useState([]);
	const [lastPage, setLastPage] = useState(0);
	const [resultNo, setResultNo] = useState();
	
	const fetchObjectIDs = async () => {
		const {data: {objectIDs}} = await axios.get(mainUrls.search.concat("&q=", (!searchExpr) ? "Monet" : searchExpr));
		return objectIDs;
	}
	
	const setResult = async () => {
		setLastPage(0);
		setArtworks([]);
		setHasMorePage(false);
		const oIds = await fetchObjectIDs();
		setResultNo(0);
		setObjectIDs(oIds);
		setResultNo(oIds.length);
		setLastPage(1);
	}

	useEffect(() => {
		setResult();
	}, [searchExpr]);


	const fetchNextPageOfArtworks = async () => {
		let nextPageOfArtworks = [];
		let _hasMorePage = false;
		if ((lastPage > 0) && (objectIDs.length > 0)) {
			const total = objectIDs.length;
			const firstItem = (lastPage - 1) * itemsPerPage;
			const lastItem = firstItem + itemsPerPage;
			const objectIDsPage = objectIDs.slice(firstItem, lastItem);
			_hasMorePage = (lastItem <= total);
			for (const objectID of objectIDsPage) {
				const nextArtwork = await getArtworkData(objectID, false);
				nextPageOfArtworks.push(nextArtwork);
			}
		}
		return {
			nextPage: nextPageOfArtworks,
			hasMore: _hasMorePage
		}
	}		

	const setNextPage = async () => {
		const result = await fetchNextPageOfArtworks();
		setArtworks([].concat(...artworks, result.nextPage));
		setHasMorePage(result.hasMore);
	}
	
	useEffect(() => {
		setNextPage();
	}, [lastPage]);
	
	return [
		((artworks.length === 0) && (resultNo > 0)) ? "Loading..." : artworks,
		searchExpr,
		setSearchExpr,
		lastPage,
		setLastPage,
		hasMorePage,
		resultNo
	];
};
		