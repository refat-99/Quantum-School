import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Slider from './Pages/Slider/Slider';
import Services from './Pages/Services/Services';
import ErorPage from './Pages/Eror404/ErorPage';
import Footer from './Pages/Footer/Footer';
import CantactUs from './Pages/CantactUs/CantactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teacher from './Pages/Teacher/Teacher';
import LogIn from './Pages/LogInPage/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/service' element={<Services/>}></Route>
          <Route path='/cantactus' element={<CantactUs/>}></Route>
          <Route path='/LogIn' element={<LogIn/>}></Route>
          <Route path='/teacher' element={<Teacher/>}></Route>
          <Route path='*' element={<ErorPage/>}></Route>
          
        </Routes>
        <Footer>
            <Footer />
          </Footer>
      </BrowserRouter>
     
      {/* <Slider></Slider>
      <Home></Home>
      <Services></Services>
      <ErorPage></ErorPage>
     
      <CantactUs></CantactUs> */}
    </div>
  );
}

export default App;
