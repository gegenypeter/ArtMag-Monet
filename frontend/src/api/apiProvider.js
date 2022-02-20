import axios from "axios";

const apiSearchURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&artisOrCulture"
const apiObjectURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

export const getArtworkData = async (objectID, detailed = true) => {
	const {data} = await axios.get(apiObjectURL.concat(objectID.toString()));
	
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
	const {data: {objectIDs}} = await axios.get(apiSearchURL.concat("&q=", query));
	return objectIDs;
}

export const getArtworkPageData = async (objctIDsPage) => {
	const pageData = [];
	for (const objectID of objctIDsPage) {
		const artwork = await getArtworkData(objectID, false);
		pageData.push(artwork);
	}
	return pageData;
}