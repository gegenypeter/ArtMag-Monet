import axios from 'axios';
import { backendBaseURL } from './backendBaseURL';


export const storeArtwork = async (image) => {
	let result = false;
	try {
		await axios.post(backendBaseURL.concat("/category"), image, {
			headers: {
				authorization: localStorage.getItem("sessionId")
			}
		})
		result = true;
	}
	catch (err) {
		result = err.response.status;
	}
	finally {
		return result;
	}
};
