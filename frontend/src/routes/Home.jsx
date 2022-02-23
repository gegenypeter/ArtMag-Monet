import { useState } from 'react';
import { getArtworkData, getResultSet } from '../api/apiProvider';
import ArtworkThumbnail from '../component/ArtworkThumbnail';
import '../styles/Home.css';

function Home(props) {
	
	const {artworkList, canLoadMore, searchExpr, setSearchExpr, showMore, resultNo} = props;

	const [searchText, setSearchText] = useState(searchExpr);

	
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
			<button onClick={() => setSearchExpr(searchText)}>Search</button>
			{(typeof(artworkList) === "object") &&
				(resultNo === 0)
					? <h3>No results</h3>
					: <h3>{resultNo} results</h3>
			}
		</div>

		<div className="Home">
			<div className="thumbnails">
				{/* {(artworkList.length > 0) && artworkList.map(({id, title, artist, image}) =>  */}
				{(typeof(artworkList) === "object")
					? artworkList.map(({id, title, artist, image}) => 
						<ArtworkThumbnail
							key={id}
							id={id}
							title={title}
							artistName={artist}
							image={image}
						/>
						)
						: <p>{artworkList}</p>
				}
    		</div>
		{canLoadMore && (<button className="showMore" onClick={showMore}>Show more artwork</button>)}
    	</div>
	</>)
}

export default Home;