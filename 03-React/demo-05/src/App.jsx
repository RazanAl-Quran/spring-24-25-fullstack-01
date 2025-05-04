import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Profile from './Profile';
import NotFound from './NotFound';
import Resume from './Resume';

function App() {
  return (

    <Router>

      <div>
        <h1>React Router Demo</h1>

        <nav>
          <Link to="/" > Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/profile/razan">My Profile</Link>
          <Link to="/resume">Resume</Link>
        
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>

    </Router>
  )
}

export default App
