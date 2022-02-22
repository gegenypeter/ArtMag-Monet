import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Collection.css";

const Collection = () => {
  const [saved, setSaved] = useState([]);
  console.log(saved);

  useEffect(() => {
    async function load() {
      const response = await axios("http://localhost:4000/api/collection");
      setSaved(response.data);
    }
    load();
  }, []);

  return (
    <>
      <h1>My collection</h1>
      <div className="collection">
        {saved.map((art) => (
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
