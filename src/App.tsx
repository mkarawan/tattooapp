import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DesignCard from "../components/DesignCard/DesignCard";
import Home from "../pages/Home/Home";
import Designs from "../pages/Designs/Designs.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/designs" element={<Designs />} />
              <Route path="/designCard:id" element={<DesignCard />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
