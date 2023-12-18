import React, { useState } from 'react';
import MinesweeperHints from '../src/components/MinesweeperHints';
import RPNCalculator from '../src/components/RPNCalculator';
import './App.css';
function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="App">
      <div className="tab-container">
        <button 
          onClick={() => setActiveTab('calculator')} 
          className={`tab ${activeTab === 'calculator' ? 'active-tab' : ''}`}
        >
          RPN Calculator
        </button>
        <button 
          onClick={() => setActiveTab('minesweeper')} 
          className={`tab ${activeTab === 'minesweeper' ? 'active-tab' : ''}`}
        >
          Minesweeper Hints
        </button>
      </div>
      {activeTab === 'calculator' && <RPNCalculator />}
      {activeTab === 'minesweeper' && <MinesweeperHints />}
    </div>
  );
}
export default App;