/**
 * 
 * getArtworksData(itemsPerPage, pageNumber)
	visszaadott object
	{
		artworks:
		[
			{
				id
				title
				artist
				image //kicsi kép
			}
		]
		hasMorePage //true vagy false, arra való, hgy tudjuk van-e még több kép egy LoadMore gombhoz
	}

 */

// getArtworkData(artworkID)
/**
 * 			id
			title
			period
			artist
			{
				name
				born
				died
				more // link a művész wikipédia cikkére
			},
			dimensions
			creationYear
			city
			country
			rights // jogtulajdonos
			image // nagy kép
 * 
 */

import axios from "axios";

const apiSearchURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet"
const apiObjectURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

let dataSummary;

export const getArtworkData = async (objectID, detailed = true) => {
	const {data} = await axios.get(apiObjectURL.concat(objectID));
	
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
	// console.log(result);
	return result;
}

export const getArtworksData = async (itemsPerPage, page) => {
	if (!dataSummary) {
		const {data} = await axios.get(apiSearchURL);
		dataSummary = data;
	}
	const {objectIDs, total} = dataSummary;
	const firstItem = (page - 1) * itemsPerPage;
	const lastItem = firstItem + itemsPerPage;
	const objectIDsPage = objectIDs.slice(firstItem, lastItem);
	const objectList = [];
	for (const objectID of objectIDsPage) {
		const object = await getArtworkData(objectID, false);
		objectList.push(object);
	}
	const result = {
		artworks: objectList,
		hasMorePage: (lastItem <= total)
	}
	return {...result};
}