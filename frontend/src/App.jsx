import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/login/Login';
import Home from './pages/home/Home'
import AboutUs from './pages/about/About';
import Product from './pages/product/Product';
import ReviewPage from './pages/review/ReviewPage';
import ChatBox from './pages/chatbox/ChatBox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path='/review' element={<ReviewPage />} />
        <Route path='/chatbox' element={<ChatBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
