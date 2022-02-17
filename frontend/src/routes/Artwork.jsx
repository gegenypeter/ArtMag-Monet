import React from "react";
import "../styles/Artwork.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtworkData } from "../api/apiProvider";

const Artwork = () => {

	const {id} = useParams();

	const [artwork, setArtwork] = useState({});

	const loadArtwork = async () => {
		const data = await getArtworkData(id);
		setArtwork(data);
		return data;
	}
	
	useEffect(() => {
		loadArtwork();
	}, [])

	return (
		<div className="artworkContainer artwork">
			<div className="image artwork">
				{(artwork.image) && <img src={artwork.image.large} alt={artwork.title}/>}
			</div>
			<div className="details artwork">
				{(artwork.creationYear) && <p>{artwork.creationYear}</p>}
				{(artwork.title) && <h1>{artwork.title}</h1>}
				{(artwork.artist) && <p>{artwork.artist.name}</p>}
				{(artwork.artist && artwork.artist.born && artwork.artist.died) && <p>{artwork.artist.born + " - " + artwork.artist.died + ")"}</p>}
				{(artwork.artist && artwork.artist.more) && <a className="more" href={artwork.artist.more} target="_blank" rel="noreferrer">more...</a>}
				{(artwork.period) && <p>{artwork.period}</p>}
				{(artwork.city) && <p>{artwork.city}</p>}
				{(artwork.country) && <p>{artwork.country}</p>}
				{(artwork.dimensions) && <p>{artwork.dimensions}</p>}
				{(artwork.rights) && <p>{artwork.rights}</p>}
			</div>
		</div>
	)
}

export default Artwork;