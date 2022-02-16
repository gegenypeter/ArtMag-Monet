import { useEffect, useState } from 'react';
import { getNextArtworkData } from './api/apiProvider';
import './App.css';
import Artwork from './component/Artwork';
import ArtworkThumbnail from './component/ArtworkThumbnail';
import Footer from './component/Footer';
import Header from './component/Header';
import Search from './component/SearchComponent';

const itemsPerPage = 20;

function App() {

  const [artworks, setArtworks] = useState([]);
  const [canLoadMore, setCanLoadMore] = useState(false);

  const loadArtworks = async () => {
   const {artworks, hasMorePage} = await getArtworksData(10, 3);
    setArtworks(artworks);
    setCanLoadMore(hasMorePage)
  }

  useEffect( () => {
    loadArtworks()
  }, []);


  return (
    <div className="App">
      <Header />
      <Search />
      <div className='container'>
        {artworkList.map(({id, title, artist, image}) => 
            <ArtworkThumbnail
              key={id}
              id={id}
              title={title}
              artistName={artist}
              image={image}
              // onClick={showArtwork}
            />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
