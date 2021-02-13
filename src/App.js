import React, { useState } from 'react';
import ExchangeRate from './components/ExchangeRate';
import Dropdown from './components/Dropdown';
import './App.css';

const currencies = [
  {
    name: 'Canadian Dollars',
    label: 'CAD',
    value: 'cad',
  },
  {
    name: 'UAE Dirham',
    label: 'AED',
    value: 'aed',
  },
  {
    name: 'United States Dollars',
    label: 'USD',
    value: 'usd',
  },
  {
    name: 'Nigerian Naira',
    label: 'NGN',
    value: 'ngn',
  },
];

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  return (
    <div>
      <div className='dropdowns'>
        <Dropdown
          label='Base Currency'
          currencies={currencies}
          selectedCurrency={baseCurrency}
          onSelectedOptionChange={setBaseCurrency}
        />

        <Dropdown
          label='Target Currency'
          currencies={currencies}
          selectedCurrency={targetCurrency}
          onSelectedOptionChange={setTargetCurrency}
        />
      </div>
      <div>
        <ExchangeRate
          name={targetCurrency.name}
          baseCurrency={baseCurrency}
          targetCurrency={targetCurrency}
        />
      </div>
    </div>
  );
};

export default App;
