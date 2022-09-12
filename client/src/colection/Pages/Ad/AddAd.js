import { Container, Form } from 'react-bootstrap';

const AddAd = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control />
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
            <Form.Label>Price</Form.Label>
            <Form.Control />
            <Form.Label>Destination</Form.Label>
            <Form.Control />
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default AddAd;
