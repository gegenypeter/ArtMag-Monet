import React from "react";
import "../styles/Collection.css";

const Collection = (props) => {

  const {userArtworks} = props

  // A userArtworks betöltődik loginkor0

  return (
    <>
      <h1>My collection</h1>
      <div className="collection">
        {userArtworks.length && userArtworks.map((art) => (
          <div className="thumbNailDiv" key={art.id}>
             <img className="smallImg" alt="" src={art.image} />
             <div className="contentDiv">
              <p className="artWorkTitle">{art.title}</p>
              <p className="artistName">Artist: {art.artist}</p>
             </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
