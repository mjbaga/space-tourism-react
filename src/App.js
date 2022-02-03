import { Routes, Route } from 'react-router-dom';
import './App.css';
import DesignSystem from './pages/DesignSystem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>} />
        <Route path='/design-system' element={<DesignSystem />} />
      </Routes>
      
    </div>
  );
}

export default App;
