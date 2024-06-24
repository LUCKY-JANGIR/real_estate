import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Signin from "./Screens/Signin";
import About from "./Screens/About";
import Nav from "./Components/Nav";
import Profile from "./Screens/Profile";

function App() {
  return (
    <>
      <div classname="bg-white">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
