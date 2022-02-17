import React from "react";
import "../styles/ThumbNail.css";
import Artwork from "./Artwork";

// Ez egyetlen ArtworTthumbnail legyen inkább és az App.js-be legyen map-elve /Laci/

const artworkThumbnail = (props) => {

  const {id, title, image ,artistName} = props;

  return (
    <div className='thumbNailDiv' key={id}>
      <img className="smallImg" key={`img${id}`} alt={title} src={image}/>
      <div className="contentDiv" key={`div${id}`}>
        <p className="artWorkTitle" key={`p${id}`}> {title} </p>
        <p className="artistName" key={`p2${id}`}>Artist: {artistName}</p>
      </div>
      <div className="btnDiv" key={`div2${id}`}>
        <button className="save" key={`btn${id}`}>Save</button>
      </div>
    </div>
  );
};

export default artworkThumbnail;
