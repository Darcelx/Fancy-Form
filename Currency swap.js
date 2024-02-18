import React, { useState, useEffect } from 'react';

const CurrencySwapForm = () => {
  const [tokenPrices, setTokenPrices] = useState({});
  const [exchangeRates, setExchangeRates] = useState({});
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    fetch('https://interview.switcheo.com/prices.json')
      .then(response => response.json())
      .then(data => setTokenPrices(data))
      .catch(error => console.error('Error fetching token prices:', error));
  }, []);

  useEffect(() => {
    // Calculate exchange rates based on token prices and user inputs
    // For simplicity, let's assume it's a function called calculateExchangeRates
    const calculateExchangeRates = () => {
      // Calculate and set exchange rates based on token prices, fromToken, and toToken
    };
    calculateExchangeRates();
  }, [tokenPrices, fromToken, toToken]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    // Display success message or error message
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form inputs for token selection and amount */}
        <label>
          From Token:
          <input type="text" value={fromToken} onChange={(e) => setFromToken(e.target.value)} />
        </label>
        <label>
          To Token:
          <input type="text" value={toToken} onChange={(e) => setToToken(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        {/* Display exchange rates */}
        <div>Exchange Rates: {JSON.stringify(exchangeRates)}</div>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CurrencySwapForm;


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
