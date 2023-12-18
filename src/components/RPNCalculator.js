import axios from 'axios';
import React, { useState } from 'react';
import '../styles/RPNCalculator.css';

const RPNCalculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/calculate', { expression });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error fetching result', error);
        }
    };

    return (
        <div className="calculator-container">
            <h2>RPN Calculator</h2>
            <form onSubmit={handleSubmit} className="calculator-form">
                <input 
                    type="text" 
                    value={expression} 
                    onChange={(e) => setExpression(e.target.value)} 
                    placeholder="Enter expression"
                    className="calculator-input"
                />
                <button type="submit" className="calculator-button">Calculate</button>
            </form>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
};

export default RPNCalculator;