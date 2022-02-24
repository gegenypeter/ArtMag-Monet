import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { useArtworks } from './api/apiProvider';

import Footer from './component/Footer';
import Header from './component/Header';

import Home from './routes/Home';
import Artwork from './routes/Artwork'
import Collection from './routes/Collection'
import Login from './routes/Login'
import Register from './routes/Register'
import { useState } from "react";

function App() {

	const [authEmail, setAuthEmail] = useState("");
	const [authPassword, setAuthPassword] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userArtworks, setUserArtworks] = useState([]);

	const [
		artworkList,
		searchExpr,
		setSearchExpr,
		lastPage,
		setLastPage,
		canLoadMore,
		resultNo
	] = useArtworks("");
	
	
	const showMore = () => {
		setLastPage(lastPage + 1);
	}		

	return (
		<div className="App">
			<BrowserRouter>
				<Header 
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
					authEmail={authEmail}
					authPassword={authPassword}
					setUserArtworks={setUserArtworks}
				/>
				<Routes>
					<Route path="/" element={
						<Home
							artworkList={artworkList}
							canLoadMore={canLoadMore}
							searchExpr={searchExpr}
							setSearchExpr={setSearchExpr}
							showMore={showMore}
							resultNo={resultNo}
							isLoggedIn={isLoggedIn}
							userArtworks={userArtworks}
							authEmail={authEmail}
							setUserArtworks={setUserArtworks}
						/>
					}/>
					<Route path="/register" element={
						<Register
							setIsLoggedIn={setIsLoggedIn}
							setEmail={setAuthEmail}
							setUserArtworks={setUserArtworks}
						/>
					}/>
					<Route path="/login" element={
						<Login
							setAuthEmail={setAuthEmail}
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
							setUserArtworks={setUserArtworks}
							setAuthPassword={setAuthPassword}
						/>
					}/>
					<Route path="/collection" element={
						<Collection
							userArtworks={userArtworks}
							setUserArtworks={setUserArtworks}
							authEmail={authEmail}
							authPassword={authPassword}
						/>
					}/>
					<Route path="/artwork/:id" element={<Artwork/>}/> 
				</Routes>

				<Footer/>

			</BrowserRouter>
		</div>
	);
}

export default App;
