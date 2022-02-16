import React from "react";
import "../styles/ThumbNail.css";

// Ez egyetlen ArtworTthumbnail legyen inkább és az App.js-be legyen map-elve /Laci/

const artWorkThumbNail = (props) => {
  return (
    <>
      <img className="smallImg" alt={props.title} src={props.smallIMG} />
      <div className="contentDiv">
        <p className="artWorkTitle"> {props.title} </p>
        <p className="artistName">Artist: {props.artistDisplayName}</p>
      </div>
      <div className="btnDiv">
        <button className="save">Save</button>
      </div>
    </>
  );
};

export default artWorkThumbNail;
