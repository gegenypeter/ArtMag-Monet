import axios from "axios";
import { middleBaseUrl } from "../api/middleBaseURL"


const saveArtwork = async ({data, props}) => {
 const {authEmail, authPassword} = props
 console.log(data);
 
  console.log(data);
  const newArt = {
    id: data.id,
    title: data.title,
    artist: data.artistName,
    image: data.image,
  };
  try {
    await axios.post(middleBaseUrl.concat("/api/save"), newArt, {headers: {
      authorization:  authEmail + ':::' + authPassword
    }}
);
    alert("Artwork saved!");
  } catch (err) {
    if (!err.response) {
      alert("Something went wrong");
    }
    if (err.response.status === 409) {
      alert("Artwork already saved!");
    }
  }
};
export default saveArtwork