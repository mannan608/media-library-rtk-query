
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css'
import Index from './pages/Index';
import Layout from './layout/Layout';
import Media from './pages/Media';
import Products from './pages/Products';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/media" element={<Media />} />
            <Route path="/product" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
