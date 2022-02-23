import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
		resultNo,
	] = useArtworks("");
	
	
	const showMore = () => {
		setLastPage(lastPage + 1);
	}		

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<>
						<Header 
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
							authEmail={authEmail}
							authPassword={authPassword}
						/>
						<Home
							artworkList={artworkList}
							canLoadMore={canLoadMore}
							searchExpr={searchExpr}
							setSearchExpr={setSearchExpr}
							showMore={showMore}
							resultNo={resultNo}
							/>
						<Footer />
					</>}/>
					<Route path="/register" element={<>
						<Header 
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
							authEmail={authEmail}
							authPassword={authPassword}
						/>
						<Register
							
						/>
						<Footer />
					</>}/>
						<Route path="/login" element={<>
							<Header 
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
							authEmail={authEmail}
							authPassword={authPassword}
							/>		 
							<Login
								authEmail={authEmail}
								authPassword={authPassword}
								setAuthEmail={setAuthEmail}
								setAuthPassword={setAuthPassword}
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
							/>
							<Footer />
						</>}/>
					<Route path="/artwork/:id" element={<Artwork/>}/> 
					<Route path="/collection" element={<>
						<Header 
							isLoggedIn={isLoggedIn}
							setIsLoggedIn={setIsLoggedIn}
							authEmail={authEmail}
							authPassword={authPassword}
						/>
						<Collection
						userArtworks={userArtworks}
						setUserArtworks={setUserArtworks}
						authEmail={authEmail}
						/>
						<Footer />
					</>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
