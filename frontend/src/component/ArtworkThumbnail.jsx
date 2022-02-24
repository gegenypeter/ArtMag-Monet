import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThumbNail.css";
import axios from "axios";
import { loadUserArtworks } from "../api/middleProvider"
import { middleBaseURL } from "../api/middleBaseURL"

// Ez egyetlen ArtworTthumbnail legyen inkább és az App.js-be legyen map-elve /Laci/

const artworkThumbnail = (props) => {

  const {id, title, image, artistName, canBeSaved, inMyCollection, authEmail, setUserArtworks} = props;

  const saveArtwork = async (data) => {
 
    const newArt = {
      id: data.id,
      title: data.title,
      artist: data.artistName,
      image: data.image,
    };
    try {
      await axios.post(middleBaseURL.concat("/api/save"), newArt,
        {
          headers: {
            authorization: localStorage.getItem("sessionId")
          }
        }
      )
      await loadUserArtworks(authEmail, setUserArtworks)
    }
    catch (err) {
      if (!err.response) {
        alert("Something went wrong");
      }
      if (err.response.status === 409) {
        alert("Artwork already saved!");
      }
    }
  };

  return (
    <div className='thumbNailDiv' key={`div1${id}`}>
      <Link to={`/artwork/${id}`}>
        <img className="smallImg" key={`img${id}`} alt={title} src={image}/>
      </Link>
      <div className="contentDiv" key={`div2${id}`}>
        <p className="artWorkTitle" key={`p${id}`}> {title} </p>
        <p className="artistName" key={`p2${id}`}>Artist: {artistName}</p>
      </div>
      <div className="btnDiv" key={`div3${id}`}>
        {canBeSaved && !inMyCollection && <button onClick={()=>saveArtwork(props)} className="save" key={`but${id}`}>Add to my collection</button>}
        {inMyCollection && <p className="inMyCollection">In my collection</p>}
      </div>
    </div>
  );
};

export default artworkThumbnail;
