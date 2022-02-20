import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThumbNail.css";
import SaveArtwork from "./SaveRequest";

// Ez egyetlen ArtworTthumbnail legyen inkább és az App.js-be legyen map-elve /Laci/

const artworkThumbnail = (props) => {

  const {id, title, image, artistName} = props;

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
        <button onClick={()=>SaveArtwork(props)} className="save" key={`but${id}`}>Save</button>
      </div>
    </div>
  );
};

export default artworkThumbnail;
