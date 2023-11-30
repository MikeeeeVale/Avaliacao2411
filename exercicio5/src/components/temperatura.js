import React, { useState } from 'react';

const Temperatura = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const Celsius = (e) => {
    const temperaturaCelsius = e.target.value;
    setCelsius(temperaturaCelsius);
    setFahrenheit((parseFloat(temperaturaCelsius) * 9/5 + 32).toFixed(2));
  };

  const Fahrenheit = (e) => {
    const temperaturaFahrenheit = e.target.value;
    setFahrenheit(temperaturaFahrenheit);
    setCelsius(((parseFloat(temperaturaFahrenheit) - 32) * 5/9).toFixed(2));
  };

  return (
    <div>

      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={Celsius}
        />
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={Fahrenheit}
        />
      </label>
    </div>
  );
};

export default Temperatura;
