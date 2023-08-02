import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/pages/home'
import About from './components/pages/about';
import Services from './components/pages/services';
import Contact from './components/pages/contact';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
