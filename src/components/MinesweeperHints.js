import axios from 'axios';
import React, { useState } from 'react';
import '../styles/MinesweeperHints.css';

const MinesweeperHints = () => {
    const [square, setSquare] = useState('');
    const [hints, setHints] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/show-hints', { square: square.split('\n') });
            setHints(response.data.hints);
        } catch (error) {
            console.error('Error fetching hints', error);
        }
    };

    return (
        <div className="hints-container">
            <h2>Minesweeper Hints</h2>
            <form onSubmit={handleSubmit} className="hints-form">
                <textarea 
                    value={square} 
                    onChange={(e) => setSquare(e.target.value)} 
                    placeholder="Enter Minesweeper board (each row separated by newline)"
                    className="hints-textarea"
                />
                <button type="submit" className="hints-button">Show Hints</button>
            </form>
            {hints && <p>Hints: <pre>{hints.join('\n')}</pre></p>}
        </div>
    );
};

export default MinesweeperHints;