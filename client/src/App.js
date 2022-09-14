import { Container } from 'react-bootstrap';
import Header from './colection/view/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './colection/Pages/Home/Home';
import AddAd from './colection/Pages/Ad/AddAd';

const App = () => {
  return (
    <Container>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route paht="/Add/:id" element={<Add />} />
          <Route path="/Add/Ad" element={<AddAd />} />
        </Routes>
      </Header>
    </Container>
  );
};

export default App;
