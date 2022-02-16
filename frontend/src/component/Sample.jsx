import { useEffect, useState } from "react";
import { getArtworksData } from "../api/apiProvider";

function Sample() {


	const [artworks, setArtworks] = useState([]);
	const [hasMorePage, setHasMorePage] = useState();

	const loadArtworks = async () => {
		const data = await getArtworksData(10, 18);
		setArtworks(data.artworks);
		setHasMorePage(data.hasMorePage);
	}

	useEffect(() => {
		loadArtworks();
	}, [])

	return (
		<div>
			{artworks.map((artwork, index) => {
				return (
					<div key={`div${index}`}>
						<p key={`p${index}`}>{artwork.title}</p>
						<img  key={`img${index}`} src={artwork.image} alt={artwork.title} />
					</div>
				)
			})};
		</div>
	)
}

export default Sample;