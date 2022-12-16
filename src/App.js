
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./pages/AllRoutes";


import Aos from "aos"
import "aos/dist/aos.css"
function App() {
  useEffect(() => {
    Aos.init({duration:2000})
},[])
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
