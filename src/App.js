import { Container, Row, Col, Card } from "react-bootstrap";
import GiphyViewer from "./components/GiphyViewer";
function App() {

  return (
    <div className="mt-5">
      <Container class="mt-5">
        <Row>
          <Col>
            <GiphyViewer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
