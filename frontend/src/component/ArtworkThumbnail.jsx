import React from "react";
import "./ThumbNail.css"


const datas = [
    {
      objectID: 1,
      title: 'elsoo',
      artistDisplayName: "Vincent Van Gogh",
      primaryIMG: "https://images.metmuseum.org/CRDImages/ad/original/144703.jpg",
      smallIMG: "https://images.metmuseum.org/CRDImages/ad/web-large/144703.jpg"
    },
    {
      objectID: 2,
      title: 'masodik',
      artistDisplayName: "Csokonai",
      primaryIMG: "https://images.metmuseum.org/CRDImages/ad/original/144703.jpg",
      smallIMG: "https://images.metmuseum.org/CRDImages/ad/web-large/144703.jpg"
    },
    {
      objectID: 3,
      title: 'harmadik',
      artistDisplayName: "Mr festő",
      primaryIMG: "https://images.metmuseum.org/CRDImages/ad/original/144703.jpg",
      smallIMG: "https://images.metmuseum.org/CRDImages/ad/web-large/144703.jpg"
    },
  ]
  
  const artWorkThumbNail = () => {
      return (
          <>
              {datas.map(art => 
                  <div className="thumbNailDiv" key={art.objectID}>
                      <img className="smallImg" alt={art.title} src={art.smallIMG}/>
                      <p className="artWorkTitle">Title: {art.title} </p>
                      <p className="artistName">Artist: {art.artistDisplayName}</p>
                  </div>
              )
              }
          </>
      )
  };

  export default artWorkThumbNail;