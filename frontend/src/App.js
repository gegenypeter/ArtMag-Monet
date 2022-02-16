import { useEffect, useState } from 'react';
import { getArtworksData } from './api/apiProvider';
import './App.css';
import ArtworkThumbnail from './component/ArtworkThumbnail';
import Footer from './component/Footer';
import Header from './component/Header';
import Search from './component/SearchComponent';

function App() {

  const [artworks, setArtworks] = useState([]);
  const [canLoadMore, setCanLoadMore] = useState(false);

  const loadArtworks = async () => {
   const {artworks, hasMorePage} = await getArtworksData(20, 1);
   console.log(artworks)
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
      {artworks.map(art => 
        <div className='thumbNailDiv' key={art.id}>
          <ArtworkThumbnail title={art.title} artistDisplayName={art.artist} smallIMG={art.image}/>
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
