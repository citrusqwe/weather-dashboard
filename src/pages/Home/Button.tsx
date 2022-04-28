import React from 'react';
import { FaTemperatureHigh, FaUmbrella } from 'react-icons/fa';
import { TiWeatherWindy } from 'react-icons/ti';

interface ButtonProps {
  type: string;
  currentType: string;
  setType: any;
}

const icons = new Map([
  ['temp', <FaTemperatureHigh />],
  ['precipitation', <FaUmbrella />],
  ['air', <TiWeatherWindy />],
]);

const Button: React.FC<ButtonProps> = ({ type, currentType, setType }) => {
  return (
    <button
      className={`weather-header__button ${
        type === currentType ? 'active' : ''
      }`}
      onClick={() => setType(type)}
    >
      {icons.get(type)}
    </button>
  );
};

export default Button;
