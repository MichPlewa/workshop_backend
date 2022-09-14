import { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { API_URL } from '../../../config';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('login', login);
    fd.append('password', password);
    fd.append('phone', phone);
    fd.append('avatar', avatar);

    const option = {
      method: 'POST',
      body: fd,
    };

    setStatus('loading');

    fetch(`${API_URL}/user/register`, option)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
        } else if (res.status === 400) {
          setStatus('clientError');
        } else if (res.status === 409) {
          setStatus('loginError');
        } else {
          setStatus('serverError');
        }
      })
      .catch((err) => {
        setStatus('serverError');
      });
  };

  return (
    <Form className="col-12 col-sm-3 mx-auto" onSubmit={(e) => handleSubmit(e)}>
      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have successfully registerd!</p>
        </Alert>
      )}
      {status === 'loginError' && (
        <Alert variant="warning">
          <Alert.Heading>Login in use!</Alert.Heading>
          <p>Try new login!</p>
        </Alert>
      )}
      {status === 'clientError' && (
        <Alert variant="danger">
          <Alert.Heading>Not enough data</Alert.Heading>
          <p>You have to fill all the fields</p>
        </Alert>
      )}
      {status === 'serverError' && (
        <Alert variant="danger">
          <Alert.Heading>Someting went wrong</Alert.Heading>
          <p>Try again!</p>
        </Alert>
      )}
      {status === 'loading' && (
        <Spinner animation="border" role="status" className="block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <h1 className="my-4">Sing up</h1>
      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          placeholder="Login"
          onChange={(e) => setLogin(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone number "
          onChange={(e) => setPhone(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAvatar">
        <Form.Label>Avatar</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => {
            console.log(e.target);
            setAvatar(e.target.files[0]);
          }}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
