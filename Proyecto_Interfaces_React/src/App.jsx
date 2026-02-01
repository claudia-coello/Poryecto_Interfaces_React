// import './App.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; 


import Landing from './pages/landing.jsx'; 
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import NotFound from "./pages/NotFound";
import PlanesServicio from './pages/PlanesServicio.jsx';
import Pomodoro from './pages/pomodoro/Pomodoro.jsx';
import Dashboard from "./pages/dashboardUser/DashboardUser.jsx";

import "./index.css"
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link hide="true" to="/">Home</Link>
        </nav>

        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/planes-servicio" element={<PlanesServicio />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App