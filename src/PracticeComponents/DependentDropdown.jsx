import React, { useState, useEffect } from 'react';

const countryStateMap = {
  USA: ['California', 'Texas', 'New York'],
  India: ['Maharashtra', 'Gujarat', 'Punjab'],
  Canada: ['Ontario', 'Quebec', 'Alberta']
};

const DependentDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    if (selectedCountry) {
      // Simulating API fetch with a local map
      const states = countryStateMap[selectedCountry];
      setStateList(states || []);
      setSelectedState(''); // reset selected state on country change
    }
  }, [selectedCountry]);

  return (
    <div>
      <label>
        Country:
        <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
          <option value="">-- Select Country --</option>
          {Object.keys(countryStateMap).map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </label>

      <br />

      <label>
        State:
        <select value={selectedState} onChange={e => setSelectedState(e.target.value)} disabled={!stateList.length}>
          <option value="">-- Select State --</option>
          {stateList.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DependentDropdown;
