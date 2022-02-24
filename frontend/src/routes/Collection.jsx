import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Collection.css";

const Collection = (props) => {
  const {authEmail, userArtworks, setUserArtworks} = props
  async function load() {
    console.log(authEmail);
    const response = await axios(
      `http://localhost:4000/api/collection`,{params: {email: authEmail }});
      setUserArtworks(await response.data);
    }
    
    useEffect(() => {
      load();
      console.log(userArtworks);
  }, []);

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
