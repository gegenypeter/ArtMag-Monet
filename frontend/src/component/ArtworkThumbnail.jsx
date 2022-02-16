import React from "react";
import "../styles/ThumbNail.css";
import Artwork from "./Artwork";

// Ez egyetlen ArtworTthumbnail legyen inkább és az App.js-be legyen map-elve /Laci/

const artworkThumbnail = (props) => {

  const {id, title, image ,artistName} = props;

  return (
    <div className='thumbNailDiv' key={id}>
      <img className="smallImg" alt={title} src={image}/>
      <div className="contentDiv">
        <p className="artWorkTitle"> {title} </p>
        <p className="artistName">Artist: {artistName}</p>
      </div>
      <div className="btnDiv">
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default artworkThumbnail;
