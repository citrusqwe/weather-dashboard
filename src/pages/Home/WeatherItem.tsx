import React from 'react';
import { BiWind } from 'react-icons/bi';

interface WeatherItemProps {
  timeName: string;
  condition: {
    text: string;
    icon: string;
  };
  temp_c: number;
  type: string;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  cloud: number;
  chance_of_rain: number;
}

const WeatherItem: React.FC<WeatherItemProps> = ({
  timeName,
  condition,
  temp_c,
  type,
  wind_degree,
  wind_dir,
  wind_kph,
  cloud,
  chance_of_rain,
}) => {
  if (type === 'air') {
    return (
      <div className="weather-item">
        <img
          className="weather-item__img"
          src={condition.icon}
          alt={condition.text}
        />
        <div className="weather-item__body">
          <div className="weather-item__name">{wind_dir}</div>
          <span className="weather-item__temp">
            {Math.floor(wind_kph * (10 / 36))}
          </span>
          <span>{wind_degree}</span>
        </div>
        <p className="weather-item__time">{timeName}</p>
      </div>
    );
  } else if (type === 'precipitation') {
    return (
      <div className="weather-item">
        <img
          className="weather-item__img"
          src={condition.icon}
          alt={condition.text}
        />
        <div className="weather-item__body">
          <div className="weather-item__name">Chanse of rain</div>
          <span className="weather-item__temp">{chance_of_rain}</span>
        </div>
        <p className="weather-item__time">{timeName}</p>
      </div>
    );
  }

  return (
    <div className="weather-item">
      <img
        className="weather-item__img"
        src={condition.icon}
        alt={condition.text}
      />
      <div className="weather-item__body">
        <div className="weather-item__name">{condition.text}</div>
        <span className="weather-item__temp">
          {Math.floor(temp_c)}
          <sup>o</sup>
        </span>
      </div>
      <p className="weather-item__time">{timeName}</p>
    </div>
  );
};

export default WeatherItem;
