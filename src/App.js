import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import Aerospace from './components/Aerospace';
import IndustryServices from './components/industryServices';
import Portfolio from './components/Portfolio';
import Labview from './components/Labview';
import Startnow from './components/Startnow';
import WebServices from './components/WebServices';
import Blog from './components/Blog';
import Automotive from './components/Automative';
import DeepLearning from './components/DeepLearning';
import AerospaceDefense from './components/Aerospace';
import Industry4 from './components/Industry4';

function App() {
  return (
   
      <Preloader>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/connect" element={<ContactForm />} />
              <Route path="/company" element={<AboutUs />} />
              <Route path="/digital-solutions" element={<WebServices />} />
              <Route path="/aerospace-tech" element={<IndustryServices />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/labview" element={<Labview />} />
              <Route path="/start-now" element={<Startnow />} />
              <Route path="/web-development" element={<WebServices />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/labview/automotive" element={<Automotive />} />
              <Route path="/labview/deep-learning" element={<DeepLearning />} />
              <Route path="/labview/aerospace-defense" element={<AerospaceDefense />} />
              <Route path="/labview/industry-4" element={<Industry4 />} />
              {/* Placeholder for Solutions Page */}
              <Route path="/solutions" element={<div>Solutions Page - Under Construction</div>} />
              {/* 404 Not Found Route */}
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Preloader>
    
  );
}

export default App;

