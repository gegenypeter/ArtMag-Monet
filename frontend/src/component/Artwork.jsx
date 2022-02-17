import React from "react";
import { useEffect, useState } from "react";
import { getArtworkData } from "../api/apiProvider";

function Artwork(props) {

	const {id} = props;

	const [artwork, setArtwork] = useState();

	const loadArtwork = async () => {
		debugger
		const data = await getArtworkData(id);
		console.log(data)
		setArtwork({...data});
	}

	useEffect(() => {
		debugger
		loadArtwork();
	}, [])

	return (
		<div>
			<img src={artwork.image.large} alt={artwork.title} />
			<h1>{artwork.title}</h1>
			<p>{artwork.artist.name.concat(" (", artwork.artist.born, " - ", artwork.artist.died, ")")}</p>
			<a href={artwork.artist.more}>more...</a>
		</div>
	)
}

export default Artwork;