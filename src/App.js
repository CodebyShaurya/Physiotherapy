import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/home page';
import Gallery from './Pages/gallery';
import About from './Pages/AboutMe';
import Doctor from './Pages/doctor';
import Appointment from "./Pages/appointment";
import Manoj from './Pages/doctorspage';
import Pop from './Components/Popup';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

function App() {
  return (
    <div>
        {/* <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup> */}
        <Pop/>

    <BrowserRouter >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/Drmanoj" element={<Manoj />} />
        {/* <Route path="/Teams" element={<Team />} />  */}

      </Routes> 
    </BrowserRouter>
    <a href="tel:+917355177359" target="_blank" className="whatsapp-logo1"></a>
    <a href="https://wa.me/+917355177359" target="_blank" className="whatsapp-logo"></a>

    </div>
  );
}

export default App;
