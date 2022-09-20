import { Form } from 'react-bootstrap';

const AddAd = () => {
  return (
    <Form className="col-12 col-sm-3 mx-auto">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Label>Destination</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
    </Form>
  );
};

export default AddAd;
