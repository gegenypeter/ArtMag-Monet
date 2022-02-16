import { useEffect, useState } from "react";
import { getArtworkData } from "../api/apiProvider";

function Artwork(props) {

	const {key: id} = props;

	const [artwork, setArtwork] = useState([]);

	const loadArtwork = async () => {
		const data = await getArtworkData(id);
		setArtwork(data);
	}

	useEffect(() => {
		loadArtwork();
	}, [])

	return (
		<div>
			<img src={artwork.image} alt={artwork.title} />
			<h1>{artwork.title}</h1>
			<p>{String.concat(artwork.artist.name, " (", artwork.artist.born, " - ", artwork.artist.died, ")")}</p>
			<a href={artwork.artist.more}>more...</a>
		</div>
	)
}

export default Artwork;