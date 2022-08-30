import { Container } from 'react-bootstrap';
import Header from './colection/view/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './colection/Pages/Home/Home';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
