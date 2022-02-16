import axios from "axios";
import { data } from "./sampleArtworks/sampleData";

const apiURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet"

export const getArtworks = async (itemsPerPage = 20, page = 1) => {
	const resultData = [];
	// const searchParams = {q: "monet"}
	const response = await axios.get(apiURL);
	// const response = await axios.get({
		// 	url: "/search",
		// 	baseURL: apiURL,
		// 	params: searchParams
		// });
		const {data} = response;
	const {objectIDs, total} = data;
	const firstItem = (page - 1) * itemsPerPage;
	const lastItem = firstItem + itemsPerPage;
	
	const objectIDsPage = objectIDs.slice(firstItem, lastItem);
	const resultHasMorePage = (lastItem <= total);
	for (const objectID of objectIDsPage) {
		
	}
	console.log(objectIDsPage);
	return {
		artworks: resultData,
		hasMorePage: resultHasMorePage
	}

	// console.log(data);
	// return await data;	
}