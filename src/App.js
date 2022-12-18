
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

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
    

    </div>
  );
}

export default App;
