import React from "react";
import { useParams } from "react-router-dom";
import Artwork from "../component/Artwork";
import Footer from "../component/Footer";

function ArtworkPage(props) {

	const {id} = useParams;

	return (
		<div>
			<Artwork id={id}/>
			<Footer />
		</div>

	)

}

export default ArtworkPage;