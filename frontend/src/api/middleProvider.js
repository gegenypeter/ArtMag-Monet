import axios from 'axios';
import { middleBaseURL } from './middleBaseURL';


export const saveArtwork = async (artwork) => {
	let result = false;
	try {
		await axios.post(middleBaseURL.concat("/api/save"), artwork, {
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


export const register = async (email, password) => {
	let result = false;
    try {
    	const res = await axios.post(middleBaseURL.concat("/api/signup"),
			{
				email: email,
				password: password
			}
		)
		result = res.status;
    }
    catch (err) {
		result = err.response.status
		if (result === 400) {
			alert("Missing credentials")
		}
		if (result === 409) {
			alert("User already exists")
		}
      }
	finally {
		return result;
	}
}

export const logOut = async (email, password, setArtworks) => {
	try {
		await axios.delete(middleBaseURL.concat("api/login"), {}, {
			headers: {
				authorization: email + ':::' + password
			}
		})
	}
	catch (err) {
	}
	finally{
		localStorage.removeItem("sessionId")
		setArtworks([]);
	}
}

export const logIn = async (setEmail, email, password, setArtworks) => {
	let result = false;
    try {
    	const response = await axios.post(middleBaseURL.concat("/api/login"), {}, {
        	headers: {
            	authorization: email + ":::" + password,
          	},
        });
        localStorage.setItem("sessionId", await response.data);
		setEmail(email)
		loadUserArtworks(email, setArtworks)
		result = true;
    }
	catch (err) {
        alert("Wrong email or password");
    }
	return result;
};

export async function loadUserArtworks(email, setArtworks) {
	let result = false;
	try {
		const response = await axios(middleBaseURL.concat("/api/collection"),
			{
				params: {email: email }
			}
		);
		setArtworks(await response.data);
		result = true;
	}
	finally {
		return result;
	}
}
