import { useEffect, useState } from 'react';
import { getArtworksData } from '../api/apiProvider';
import ArtworkThumbnail from '../component/ArtworkThumbnail';
import '../styles/Home.css';

const itemsPerPage = 8;

function Home(props) {

	const [searchExp, setSearchExp] = useState("");

	const {artworkList, setArtworkList, lastPage, setLastPage, canLoadMore, setCanLoadMore} = props;
	
	const loadArtworks = async (init = false) => {
		debugger;
		let page = lastPage;
		if (init) page = 1;
    	const {artworks, hasMorePage} = await getArtworksData(itemsPerPage, page, searchExp);
		if (init) {
			setArtworkList([...artworks]);
			setLastPage(2);
		} else {
			setArtworkList([...artworkList, ...artworks]);
			setLastPage(lastPage + 1);
		}
    	setCanLoadMore(hasMorePage)
  	}

	const showMore = () => {
    	loadArtworks();
	}
	
	useEffect(() => {
		if (!artworkList.length) {
			loadArtworks();
		}
  	});

	const search = () => {
		setArtworkList([]);
		loadArtworks(true);
	}
	
	return (<>
		<div className='searchDiv'>
			<h1 className="headerTitle">The Metropolitan Museum of Art Collection</h1>
			<input
				className='searchInput'
				type="text"
				placeholder='Search here'
				value={searchExp}
				onChange={(event) => setSearchExp(event.target.value)}
			/>
			<button onClick={search}>Search</button>
		</div>

		<div className="Home">
			<div className="thumbnails">
				{(artworkList.length) && artworkList.map(({id, title, artist, image}) => 
					<ArtworkThumbnail
						key={id}
						id={id}
						title={title}
						artistName={artist}
						image={image}
					/>
				)}
    		</div>
		{canLoadMore && (<button className="showMore" onClick={showMore}>Show more artwork</button>)}
    	</div>
	</>)
}

export default Home;