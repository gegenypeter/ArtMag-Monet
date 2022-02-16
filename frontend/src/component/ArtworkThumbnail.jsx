import React from "react";
import "../styles/ThumbNail.css"


  
  // Ez egyetlen ArtworTthumbnail legyen inkább és az App.js-be legyen map-elve /Laci/
  
  const artWorkThumbNail = (props) => {
      return (
          <>
            <div className="thumbNailDiv">
                <img className="smallImg" alt={props.title} src={props.smallIMG}/>
                <p className="artWorkTitle">Title: {props.title} </p>
                <p className="artistName">Artist: {props.artistDisplayName}</p>
                <button className="save">Save</button>
            </div>
          </>
      )
  };

  export default artWorkThumbNail;