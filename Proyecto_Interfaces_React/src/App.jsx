import './App.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; 

import Landing from './pages/landing.jsx'; 
import NotFound from "./pages/NotFound";
import PlanesServicio from './pages/PlanesServicio.jsx';

import "./index.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link hide="true" to="/">Home</Link>
        </nav>

        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="/planes-servicio" element={<PlanesServicio />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App