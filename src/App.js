import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>

  );
}

export default App;
