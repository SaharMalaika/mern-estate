import {BrowserRouter,Routes,Route} from 'react-router-dom';

import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Out from './pages/Out';
import Header from './components/Header';




export default function App() {
  return <BrowserRouter >
  <Header/>
  
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/sign-in" element={<Signin/>}/>
<Route path="/Out" element={<Out/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/profile" element={<Profile/>}/>
  </Routes>
  
  </BrowserRouter>;
}
