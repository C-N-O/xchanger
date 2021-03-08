import React, { useState } from 'react';
import ExchangeRate from './components/ExchangeRate';
import Dropdown from './components/Dropdown';
import './App.css';
import Navigation from './components/Navigation';

const currencies = [
  {
    name: 'Australian Dollars',
    label: 'AUD',
    value: 'aud',
  },
  {
    name: 'Canadian Dollars',
    label: 'CAD',
    value: 'cad',
  },
  {
    name: 'Chilean Peso',
    label: 'CLP',
    value: 'clp',
  },
  {
    name: 'Japanese Yen',
    label: 'JPY',
    value: 'jpy',
  },
  {
    name: 'Pound Sterling',
    label: 'GBP',
    value: 'gbp',
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
    <div className='ui container'>
      <Navigation />

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
      <div className='blockElements'>
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
