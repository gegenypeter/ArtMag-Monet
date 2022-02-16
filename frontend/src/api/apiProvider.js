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
	const {data: artworkData} = await axios.get(apiObjectURL + objectID.toString());
	let result;
	if (detailed) {
		result =
		{
			id: objectID,
			title: artworkData.title,
			period: artworkData.period,
			artist:
			{
				name: artworkData.artistDisplayName,
				born: artworkData.artistBeinDate,
				died: artworkData.artistEndDate,
				more: artworkData.artistWikidata_URL
			},
			dimensions: artworkData.dimensions,
			creationYear: artworkData.objectEndDate,
			city: artworkData.city,
			country: artworkData.country,
			rights: artworkData.rightsAndReproduction,
			image: artworkData.primaryImage
		}
	} else {
		result =
		{
			id: objectID,
			title: artworkData.title,
			artist: artworkData.artistDisplayName,
			image: artworkData.primaryImageSmall
		}
	}
	return result;
}

export const getNextArtworkData = async (index, itemsPerPage, page) => {
	if (!dataSummary) {
		const {data} = await axios.get(apiSearchURL);
		dataSummary = data;
	}
	const {objectIDs, total} = dataSummary;
	const firstItem = (page - 1) * itemsPerPage;
	const lastItem = firstItem + itemsPerPage;
	const objectIDsPage = objectIDs.slice(firstItem, lastItem);
	const resultHasMorePage = (lastItem <= total);
	const objectData = await getArtworkData(objectIDsPage[index], false);
	const result = {
		artwork: {...objectData},
		hasMorePage: resultHasMorePage
	}
	return result;
}