import './App.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; 

import Landing from './pages/landing.jsx'; 
import NotFound from "./pages/NotFound";
import "./index.css"

function App() {
  return (
    <>
      <BrowserRouter>
        {/* If you want to use a Link, it must be inside BrowserRouter */}
        <nav>
          <Link hide="true" to="/">Home</Link>
        </nav>

        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App