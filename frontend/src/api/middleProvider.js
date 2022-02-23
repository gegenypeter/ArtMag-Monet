import axios from 'axios';

export const logOut = async (email, password) => {
	try {
		await axios.delete('http://localhost:4000/api/login', {}, {
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

export const logIn = async (email, password) => {
	let result = false;
    try {
    	const response = await axios.post(
        "http://localhost:4000/api/login", {}, {
        	headers: {
            	authorization: email + ":::" + password,
          	},
        });

        localStorage.setItem("sessionId", await response.data);
		result = true;
    }
	catch (err) {
        alert("Wrong email or password");
    }
	return result;
};
    


