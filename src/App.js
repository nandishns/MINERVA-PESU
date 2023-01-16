
import './App.css';
import Navbar from './Components/Navbar';
import {Route,Routes}  from 'react-router-dom';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<HomePage/>} ></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
