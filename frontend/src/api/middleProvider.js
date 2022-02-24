import axios from 'axios';


export const register = async (email, password) => {
	let result = false;
    try {
    	const res = await axios.post('http://34.159.141.214/api/signup',
			{
				email: email,
				password: password
			}
		)
		result = res.status;
    }
    catch (err) {
		result = err.response.status
      }
	finally {
		return result;
	}
}

export const logOut = async (email, password) => {
	try {
		await axios.delete('http://34.159.141.214/api/login', {}, {
			headers: {
				authorization: email + ':::' + password
			}
		})
	}
	catch (err) {
	}
	finally{
		localStorage.removeItem("sessionId")
	}
}

export const logIn = async (setEmail, email, password) => {
	let result = false;
    try {
    	const response = await axios.post("http://34.159.141.214/api/login", {}, {
        	headers: {
            	authorization: email + ":::" + password,
          	},
        });
        localStorage.setItem("sessionId", await response.data);
		setEmail(email)
		result = true;
    }
	catch (err) {
        alert("Wrong email or password");
    }
	return result;
};
    