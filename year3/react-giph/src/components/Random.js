import axios from "axios";
import { Button } from "react-bootstrap";

const Random = (props) => {
  const setGifs = props.setGifs;

  const GIPHY_URL = "https://api.giphy.com/v1/gifs";
  const API_KEY = "43AL10dIQe6L9zoznaWwuQP7ULNFOk0e";

  const getRandom = () => {
    axios
      .get(`${GIPHY_URL}/random?api_key=${API_KEY}`)
      .then((response) => {
        // I've wrapped this in an array, because we're using the .map() method in GiphyViewer.js
        // It expects an array, so we'll give it one.
        setGifs([response.data.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-4">
      <Button className="ms-2" variant="primary" onClick={getRandom}>
        Random
      </Button>
    </div>
  );
};

export default Random;
