import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/header.jsx";
import Hero from "./Components/hero.jsx";
import Footer from "./Components/footer.jsx";
import About from "./Components/about.jsx";
import Project from "./Components/project.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col bg-animated-gradient bg-gradient-to-r from-indigo-200  to-indigo-400 items-center justify-center">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
