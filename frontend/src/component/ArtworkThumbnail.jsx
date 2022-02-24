import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThumbNail.css";
import { loadUserArtworks, saveArtwork } from "../api/middleProvider"


// Ez egyetlen ArtworTthumbnail legyen inkább és az App.js-be legyen map-elve /Laci/

const artworkThumbnail = (props) => {

  const {id, title, image, artistName, canBeSaved, inMyCollection, authEmail, setUserArtworks} = props;

  const saveClick = async () => {

    const artwork = {
      id: id,
      title: title,
      artist: artistName,
      image: image
    };
    const status = await saveArtwork(artwork);
    await loadUserArtworks(authEmail, setUserArtworks)

    if (!status) {
        alert("Something went wrong");
      }
    if (status === 409) {
        alert("Artwork already added!");
      }
    }

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
        {canBeSaved && !inMyCollection && <button onClick={saveClick} className="save" key={`but${id}`}>Add to my collection</button>}
        {inMyCollection && <p className="inMyCollection">In my collection</p>}
      </div>
    </div>
  );
};

export default artworkThumbnail;
