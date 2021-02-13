import React, { useState } from 'react';
import axios from 'axios';
import './ExchangeRate.css';

const ExchangeRate = (props) => {
  const [conversion, setConversion] = useState(null);
  const API_KEY = '1fd1f063ab1c72b92fc00fe6';
  const baseCurrency = props.baseCurrency.label;
  const targetCurrency = props.targetCurrency.label;

  const makeRequest = async () => {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${baseCurrency}/${targetCurrency}`,
      {}
    );
    setConversion(response.data.conversion_rate);
  };

  makeRequest();

  if (!conversion) return '';
  return (
    <div class='ui rate display'>
      <div>{`1 ${baseCurrency} = ${conversion} ${targetCurrency}`}</div>
    </div>
  );
};

export default ExchangeRate;
