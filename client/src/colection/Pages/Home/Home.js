import Spinner from 'react-bootstrap/Spinner';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="mb-5 d-flex-end">
          <Col>
            <Button variant="outline-success" to="/add/ad" as={Link}>
              New Advert
            </Button>
          </Col>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" as={Link} to={'/search/'}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        {/* <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div> */}
      </Container>
    </div>
  );
};

export default Home;
