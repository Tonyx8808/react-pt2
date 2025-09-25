import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Layouts from './layouts/Layout';

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Layouts />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
