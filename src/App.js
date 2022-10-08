import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import {Home} from "./pages/Home/Home";
import {Skills} from "./pages/Skills/Skills";
import {Projects} from "./pages/Projects/Projects";
import {Contact} from "./pages/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';

function App() {
  return (
    <><div className="App main-container">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div><Footer /></>
  );
}

export default App;
