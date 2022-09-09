import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

const Header = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Container className="mt-2">{children}</Container>
    </div>
  );
};

export default Header;
