import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {

  return (
    <div className='padding-bottom'>
      <Router>
        <Header />   
        
        <Routes>
          <Route path='/React-Portfolio-1/' element={<Home />} />
          <Route path='/React-Portfolio-1/about' element={<About />} />
          <Route path='/React-Portfolio-1/contact' element={<Contact />} />
          <Route path='/React-Portfolio-1/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
