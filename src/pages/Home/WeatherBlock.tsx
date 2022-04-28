import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../redux/slices/weatherSlice';
import { sliceTime } from '../../utils';
import Button from './Button';
import WeatherItem from './WeatherItem';

const daytime = new Map([
  ['08:00', 'Morning'],
  ['13:00', 'Afternoon'],
  ['19:00', 'Evening'],
  ['23:00', 'Night'],
]);

const types = ['temp', 'precipitation', 'air'];

const WeatherBlock = () => {
  const [type, setType] = useState('temp');
  const {
    data: { forecast },
  } = useSelector(selectWeather);

  return (
    <div className="weather">
      <div className="weather-header">
        <h3>
          How's the <br /> temperature today?
        </h3>
        <div className="weather-header__buttons">
          {types.map((t, i) => (
            <Button key={i} type={t} currentType={type} setType={setType} />
          ))}
        </div>
      </div>
      <div className="weather-body">
        {forecast?.forecastday[0]?.hour?.map((f: any) => {
          if (daytime.has(sliceTime(f.time))) {
            return (
              <WeatherItem
                key={f.time_epoch}
                timeName={daytime.get(sliceTime(f.time))}
                type={type}
                {...f}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default WeatherBlock;
