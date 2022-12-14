
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./pages/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  return (
    <div className="App">
       <Navbar />
      <AllRoutes />
      <Footer /> 
    </div>
  );
}

export default App;
