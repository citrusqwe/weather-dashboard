import React from 'react';
import './index.scss';
import { BiChevronDown, BiCalendarEvent } from 'react-icons/bi';
import Prediction from './Prediction';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../redux/slices/weatherSlice';

const Aside = () => {
  const {
    data: { location, current, forecast },
    status,
  } = useSelector(selectWeather);

  if (status === 'loading' || status === 'failed')
    return <aside className="aside">Loading...</aside>;

  return (
    <aside className="aside">
      <div className="aside-header">
        <div>
          <span className="aside-header__weather">
            {current.condition.text}
          </span>
          <div className="aside-header__location">
            {`${location.name}, ${location.country}`}
            <span>
              <BiChevronDown />
            </span>
          </div>
        </div>
        <span className="aside-header__temp">
          {Math.floor(current.temp_c)} <sup>o</sup>C
        </span>
      </div>
      <div>Daytime graph</div>
      <div className="aside-prediction">
        <h3 className="aside-prediction__title">Weather Prediction</h3>
        {forecast.forecastday.map((fc: any) => (
          <Prediction key={fc.date} {...fc} />
        ))}
      </div>
      <button className="aside-button">
        <span>
          <BiCalendarEvent />
        </span>
        Next 5 days
      </button>
    </aside>
  );
};

export default Aside;
