import { useEffect, useState } from 'react';
import { getArtworksData } from './api/apiProvider';
import './App.css';
import Artwork from './component/Artwork';
import ArtworkThumbnail from './component/ArtworkThumbnail';
import Footer from './component/Footer';
import Header from './component/Header';
import Search from './component/SearchComponent';

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
	  	{/* <Sample/> */}
      <div className='container'>
      {artworks.map(art => 
          <ArtworkThumbnail key={art.id} id={art.id} title={art.title} artistName={art.artist} image={art.image} onClick={() => <Artwork id={art.id}/>}/>
      )}
      </div>
      {}
      <Footer />
    </div>
  );
}

export default App;
