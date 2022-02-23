import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Collection.css";

const Collection = () => {
  const [saved, setSaved] = useState([]);
  const sessionId = localStorage.getItem('sessionId');
  console.log(sessionId);

  async function load() {
    const response = await axios("http://localhost:4000/api/collection",{}, {headers: {
      authorization: sessionId,
    }})
    setSaved(response.data);
  };

  useEffect(() => {
    try {
      load();
    }
    catch(err){}
    if (!sessionId) return
  }, []);



  return (
    <>
      <h1>My collection</h1>
      <div className="collection">
        {saved.map((art) => (
          <div className="thumbNailDiv" key={art.artworks.id}>
            <img className="smallImg" alt="" src={art.artworks.image} />
            <div className="contentDiv">
              <p className="artWorkTitle">{art.artworks.title}</p>
              <p className="artistName">Artist: {art.artworks.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
