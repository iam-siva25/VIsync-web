import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import Aerospace from './components/WebServices';
import IndustryServices from './components/industryServices';
import Portfolio from './components/Portfolio';
import AiLabviewServices from './components/AiLabviewServices';
import Startnow from './components/Startnow';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<><Home /><Footer /></>} />
            <Route path="/connect" element={<><ContactForm /><Footer /></>} />
            <Route path="/company" element={<><AboutUs /><Footer /></>} />
            <Route path="/digital-solutions" element={<><Aerospace /><Footer /></>} />
            <Route path="/aerospace-tech" element={<><IndustryServices /><Footer /></>} />
            <Route path="/portfolio" element={<><Portfolio /><Footer /></>} />
            <Route path="/ai-labview-solutions" element={<><AiLabviewServices /><Footer /></>} />
            <Route path="/start-now" element={<><Startnow /><Footer /></>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
