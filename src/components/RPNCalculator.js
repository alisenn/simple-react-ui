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
            }
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
            {result !== null && <p className="calculator-result">Result: <span>{result}</span></p>}
        </div>
    );
};

export default RPNCalculator;