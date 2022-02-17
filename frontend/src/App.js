import { useEffect, useState } from 'react';
import { getArtworksData } from './api/apiProvider';
import './App.css';
import Artwork from './component/Artwork';
import ArtworkThumbnail from './component/ArtworkThumbnail';
import Footer from './component/Footer';
import Header from './component/Header';
import Search from './component/SearchComponent';

const itemsPerPage = 8;

function App() {

  const [artworkList, setArtworkList] = useState([]);
  const [canLoadMore, setCanLoadMore] = useState(false);
  const [page, setPage] = useState(1);


  const loadArtworks = async () => {
    const {artworks, hasMorePage} = await getArtworksData(itemsPerPage, page);
    setArtworkList([...artworkList, ...artworks]);
    setCanLoadMore(hasMorePage)
  }

  const showMore = () => {
    setPage(page + 1);
    // loadArtworks();
  }

  useEffect( () => {
    loadArtworks()
  }, [page]);


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
      {canLoadMore ? (<button onClick={showMore}>Show more artwork</button>) : ""}
      <Footer />
    </div>
  );
}

export default App;
