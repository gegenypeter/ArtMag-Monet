import axios from "axios";

export const SaveArtwork = async (data) => {
  console.log(data);
  const newArt = {
    id: data.id,
    title: data.title,
    artist: data.artistName,
    image: data.image,
  };
  try {
    await axios.post("http://localhost:4000/api/save", newArt);
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
export default SaveArtwork;
