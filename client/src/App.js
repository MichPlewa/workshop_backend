import { Container } from 'react-bootstrap';
import Header from './colection/view/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './colection/Pages/Home/Home';
import AddAd from './colection/Pages/Ad/AddAd';
import Ad from './colection/features/Ad/Ad';
import Register from './colection/Pages/register/Register';
import Login from './colection/Pages/Login/Login';

const App = () => {
  return (
    <Container>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route paht="/Add/:id" element={<Ad />} />
          <Route path="/Add/Ad" element={<AddAd />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Header>
    </Container>
  );
};

export default App;
