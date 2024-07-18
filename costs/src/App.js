
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/Home.js'
import Company from './Components/Pages/Company.js'
import Contact from './Components/Pages/Contact.js'
import NewProject from './Components/Pages/NewProject.js'
import Project from "./Components/Pages/Project.js";

import Container from "./Components/Layout/Container.js";
import Navbar from './Components/Layout/Navbar.js'
import Footer from './Components/Layout/Footer.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-Height'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
