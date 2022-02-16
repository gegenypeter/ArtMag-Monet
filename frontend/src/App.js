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

  const [artworkList, setArtworkList] = useState([]);
  const [canLoadMore, setCanLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  const loadArtworks = async () => {
    for (let i = 0; i < itemsPerPage; i++) {
      const {artwork, hasMorePage} = await getNextArtworkData(i, itemsPerPage, page);
      // debugger
      setArtworkList([...artworkList].push({...artwork}));
      setCanLoadMore(hasMorePage);
    }
  }

  const showMore = () => {
    setPage(page + 1);
    // loadArtworks();
  }

  useEffect( () => {
    loadArtworks()
  }, [page]);

  // const showArtwork = (event) => {
  //   return (
  //     <Artwork id={event.target.id}/>
  //   )
  // }

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
      <Footer/>
    </div>
  );
}

export default App;
