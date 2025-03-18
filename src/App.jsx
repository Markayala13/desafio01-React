import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import Login  from "./components/login";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<>
          <Header />
          <Home />
        </>} />
        <Route path="/register" element={<>
          <Header /> {/* MANTENEMOS el header en Register para que NO se pierda */}
          <RegisterPage />
        
        </>} />
      

      <Route path="/login" element={<>
          <Header /> 
          <Login />
        </>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

