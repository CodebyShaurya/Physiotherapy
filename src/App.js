import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/home page';
import Gallery from './Pages/gallery';
import About from './Pages/AboutMe';
import Doctor from './Pages/doctor';
import Appointment from "./Pages/appointment";
function App() {
  return (
    <BrowserRouter >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* <Route path="/Teams" element={<Team />} />  */}

      </Routes> 
    </BrowserRouter>
  );
}

export default App;
