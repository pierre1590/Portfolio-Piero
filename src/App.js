import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import {Home} from "./pages/Home";
import {Skills} from "./pages/Skills";
import {Projects} from "./pages/Projects";
import {Contact} from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';

function App() {
  return (
    <div className="App main-container">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
