import axios from "axios";

const demo = async () => {
    const response = await axios.get("http://localhost:4000/api/collection");
    const { data } = response;
    console.log(data);
  
      data.map((art) => (
        <div className="thumbNailDiv" key={art.id}>
          <img className="smallImg" alt="" src={art.image} />
          <div className="contentDiv">
            <p className="artWorkTitle">{art.title}</p>
            <p className="artistName">Artist: {art.artist}</p>
          </div>
        </div>
      ));
    };
  export default demo;
  