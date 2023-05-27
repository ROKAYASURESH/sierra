// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Blog from './Blog';
import Portfolio from './Portfolio';
import BlogDetail from './BlogDetail';
import Footer from './Footer';

function App() {
  return (
<>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blogdetail' element={<BlogDetail/>} />

      {/* <Redirect to='/'/> */}
    </Routes>
    <Footer/>
  
</>
  );
}

export default App;
