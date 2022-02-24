import React from "react";
import ArtworkThumbnail from '../component/ArtworkThumbnail';
import "../styles/Collection.css";

const Collection = (props) => {

  const {userArtworks, authEmail, authPassword, setUserArtworks} = props

  // A userArtworks betöltődik loginkor

  return (
    <>
      <h1>My collection</h1>
      <div className="collection">
        {userArtworks.length && userArtworks.map(({id, title, artist, image}) => (
          <ArtworkThumbnail
            key={id}
            id={id}
            title={title}
            artistName={artist}
            image={image}
            authEmail={authEmail}
            setUserArtworks={setUserArtworks}
            userArtworks={userArtworks}
            authPassword={authPassword}
            place="collection"
          />
        ))}
      </div>
    </>
  );
};

export default Collection;
