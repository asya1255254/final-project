import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import About from './about/about';
import Home from './home/home';


function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    </div>

  );
}

