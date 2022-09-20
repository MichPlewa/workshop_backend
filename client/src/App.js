import { Container } from 'react-bootstrap';
import Header from './colection/view/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './colection/Pages/Home/Home';
// import AddAd from './colection/Pages/Ad/AddAd';
import ViewAd from './colection/Pages/ViewAd/ViewAd';
import Register from './colection/Pages/register/Register';
import Login from './colection/Pages/Login/Login';
import { fetchAds } from './Redux/adRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAds()), [dispatch]);
  return (
    <Container>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route paht="/viewAdd/:id" element={<ViewAd />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Header>
    </Container>
  );
};

export default App;
