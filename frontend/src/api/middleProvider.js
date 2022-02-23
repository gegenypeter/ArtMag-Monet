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

