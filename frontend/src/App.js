import { useEffect, useState } from 'react';
import { getArtworks } from './api/apiProvider';
import './App.css';
import ArtworkThumbnail from './component/ArtworkThumbnail';
import Header from './component/Header';
import Sample from './component/Sample';

function App() {

  return (
    <div className="App">
      <Header />
	  	<Sample/>
		<ArtworkThumbnail/>
    </div>
  );
}

export default App;
