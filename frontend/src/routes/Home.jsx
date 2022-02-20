import { useState } from 'react';
import ArtworkThumbnail from '../component/ArtworkThumbnail';
import '../styles/Home.css';

function Home(props) {
	
	const {artworkList, canLoadMore, searchExp, setSearchExp, showMore} = props;

	const [searchText, setSearchText] = useState(searchExp);

	return (<>
		<div className='searchDiv'>
			<h1 className="headerTitle">The Metropolitan Museum of Art Collection</h1>
			<input
				className='searchInput'
				type="text"
				placeholder='Search here'
				value={searchText}
				onChange={(event) => setSearchText(event.target.value)}
			/>
			<button onClick={() => setSearchExp(searchText)}>Search</button>
		</div>

		<div className="Home">
			<div className="thumbnails">
				{(artworkList.length > 0) && artworkList.map(({id, title, artist, image}) => 
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