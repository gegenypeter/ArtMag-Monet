import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Footer from './component/Footer';
import Header from './component/Header';

import Home from './routes/Home';
import Artwork from './routes/Artwork'
import Collection from './routes/Collection'
import Login from './routes/Login'
import Register from './routes/Register'


function App() {

	const [artworkList, setArtworkList] = useState([]);
	const [canLoadMore, setCanLoadMore] = useState(false);
	const [lastPage, setLastPage] = useState(1);

	return (

	<div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<>
					<Header />
					<Home
						lastPage={lastPage}
						setLastPage={setLastPage}
						artworkList={artworkList}
						setArtworkList={setArtworkList}
						canLoadMore={canLoadMore}
						setCanLoadMore={setCanLoadMore}
						/>
					<Footer />
				</>}/>
				<Route path="/register" element={<>
					<Header />
					<Register/>
					<Footer />
				</>}/>
				<Route path="/login" element={<>
					<Header />
					<Login/>
					<Footer />
				</>}/>
				<Route path="/artwork/:id" element={<Artwork/>}/> 
				<Route path="/collection" element={<>
					<Header />
					<Collection/>
					<Footer />
				</>}/>
			</Routes>
		</BrowserRouter>,
	</div>
	);
}

export default App;
