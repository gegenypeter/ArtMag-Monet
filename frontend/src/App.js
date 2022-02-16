import { useEffect, useState } from 'react';
import { getArtworks } from './api/apiProvider';
import './App.css';
import ArtworkThumbnail from './component/ArtworkThumbnail';
import Footer from './component/Footer';
import Header from './component/Header';
import Sample from './component/Sample';
import Search from './component/SearchComponent';

function App() {

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


  return (
    <div className="App">
      <Header />
      <Search />
	  	<Sample/>
      <div className='container'>
      {datas.map(art => 
        <div key={art.objectID}>
          <ArtworkThumbnail title={art.title} artistDisplayName={art.artistDisplayName} smallIMG={art.smallIMG}/>
        </div>
      )}
      {datas.map(art => 
        <div key={art.objectID}>
          <ArtworkThumbnail title={art.title} artistDisplayName={art.artistDisplayName} smallIMG={art.smallIMG}/>
        </div>
      )}
      {datas.map(art => 
        <div key={art.objectID}>
          <ArtworkThumbnail title={art.title} artistDisplayName={art.artistDisplayName} smallIMG={art.smallIMG}/>
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
