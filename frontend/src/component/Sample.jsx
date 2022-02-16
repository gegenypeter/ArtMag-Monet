import { useEffect, useState } from "react";
import { getArtworks } from "../api/apiProvider";

function Sample() {

	const __dataPath = "api/sampleArtworks"

	const [artworks, setArtworks] = useState([]);

	const loadArtworks = async () => {
		const data = await getArtworks(10, 1);
		setArtworks(data);
	}

	useEffect(() => {
		loadArtworks();
	}, [])

	return (
		<div>
			{artworks.map((artwork, index) => {
				return (
					<div>
						<p key={index}>{artwork.title}</p>
						<img src={__dataPath + artwork.images.small} alt={artwork.title} />
					</div>
				)
			})};
		</div>
	)
}

export default Sample;