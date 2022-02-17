import Crew from 'pages/Crew';
import DesignSystem from './pages/DesignSystem';
import Destination from 'pages/Destination';
import Homepage from 'pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/design-system' element={<DesignSystem />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
      </Routes>
      
    </div>
  );
}

export default App;
