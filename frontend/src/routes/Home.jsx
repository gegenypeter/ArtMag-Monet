import { useEffect } from 'react';
import { getArtworksData } from '../api/apiProvider';
import ArtworkThumbnail from '../component/ArtworkThumbnail';
import '../styles/Home.css';

const itemsPerPage = 8;

function Home(props) {

	const {artworkList, setArtworkList, lastPage, setLastPage, canLoadMore, setCanLoadMore} = props;
	
	const loadArtworks = async () => {
    	const {artworks, hasMorePage} = await getArtworksData(itemsPerPage, lastPage);
    	setArtworkList([...artworkList, ...artworks]);
    	setCanLoadMore(hasMorePage)
		setLastPage(lastPage + 1);
  	}

	const showMore = () => {
    	loadArtworks();
	}
	
	useEffect(() => {
		if (!artworkList.length) {
			loadArtworks();
		}
  	});

	return (
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
	)
}

export default Home;