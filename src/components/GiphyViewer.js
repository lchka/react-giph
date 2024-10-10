import { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Row, Col } from "react-bootstrap";



const GiphCard = (props) => {
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={props.url} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  };


const GiphyViewer = () => {
  const GIPHY_API_KEY = "zS8ylSqoBUwvEZj2Vs15oVsNQ7eJydkX";
  const GIPHY_URL = "https://api.giphy.com/v1/gifs/search";

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    axios.get(`${GIPHY_URL}?api_key=${GIPHY_API_KEY}&q=cat&limit=5`)
      .then((res) => {
        console.log(res.data.data);
        setGifs(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Row xs={1} md={3} lg={3}>
      {
        gifs.map((gif) => (
          <GiphCard key={gif.id} url={gif.images.fixed_height.url} title={gif.title} />
        ))
      }
    </Row>
  );
};

export default GiphyViewer;
