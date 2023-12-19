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
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                alert(`An error occurred: ${error.response.status} - ${error.response.data}`);
            } else if (error.request) {
                // The request was made but no response was received
                alert('An error occurred: No response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                alert('An error occurred');
            }        }
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
                {hints !== null && 
                <div className="hints-result">
                    {hints.map((row) => (
                        <p key={row}>{row}</p>
                    ))}
                </div>
            }
        </div>
    );
};

export default MinesweeperHints;