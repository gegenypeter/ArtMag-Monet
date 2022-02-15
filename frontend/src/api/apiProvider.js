import axios from "axios";
import { data } from "./sample artworks/sampleData";

export const getArtworks = async () => {
	console.log(data);
	return await data;	
}