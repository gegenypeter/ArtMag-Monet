import { useEffect, useState } from "react";
import { getArtworks } from "../api/apiProvider";

function Sample() {

	const [artworks, setArtworks] = useState([]);

	const loadArtworks = async () => {
		const data = await getArtworks();
		setArtworks(data);
	}

	useEffect(() => {
		loadArtworks();
	}, [])

	return (
		<div>
			{artworks.map((artwork, index) => <p key={index}>{artwork.title}</p>)}
		</div>
	)
}

export default Sample;