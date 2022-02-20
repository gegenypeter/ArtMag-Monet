import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { getArtworkPageData, getResultSet } from './api/apiProvider';

import Footer from './component/Footer';
import Header from './component/Header';

import Home from './routes/Home';
import Artwork from './routes/Artwork'
import Collection from './routes/Collection'
import Login from './routes/Login'
import Register from './routes/Register'

const itemsPerPage = 8;

function App() {
	
	const [artworkList, setArtworkList] = useState([]);
	const [canLoadMore, setCanLoadMore] = useState(false);
	const [resultSet, setResultSet] = useState([]);
	
	const [searchExp, setSearchExp] = useState("");
	
	useEffect(() => {
		const loadResultSet = async () => {
			const result = await getResultSet(searchExp);
			setResultSet(result);
			setArtworkList([]);
			setLastPage(1);	
		}

		loadResultSet();
	}, [searchExp]);
	

	const [lastPage, setLastPage] = useState(0);
	
	useEffect(() => {

		const loadNextArtworksPage = async () => {
			if (resultSet.length > 0) {
				const total = resultSet.length;
				const firstItem = (lastPage - 1) * itemsPerPage;
				const lastItem = firstItem + itemsPerPage;
				const objectIDsPage = resultSet.slice(firstItem, lastItem);
				const nextPage = await getArtworkPageData(objectIDsPage);
				setArtworkList([].concat(artworkList, nextPage));
				setCanLoadMore(lastItem <= total);
			}
		}		

		loadNextArtworksPage();
	  }, [lastPage]);  


	
	const showMore = () => {
		setLastPage(lastPage + 1);
	}		

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<>
						<Header />
						<Home
							artworkList={artworkList}
							canLoadMore={canLoadMore}
							searchExp={searchExp}
							setSearchExp={setSearchExp}
							showMore={showMore}
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
