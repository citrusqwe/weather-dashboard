import React, { useLayoutEffect } from 'react';
import { TiWeatherWindy } from 'react-icons/ti';
import { SkeletonLoader } from '../../components/SkeletonLoader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWeatherAsync,
  selectWeather,
} from '../../redux/slices/weatherSlice';
import './index.scss';
import WeatherBlock from './WeatherBlock';

const Home = () => {
  const dispatch = useDispatch();
  const {
    data: { location, current, forecast },
    status,
  } = useSelector(selectWeather);

  useLayoutEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(
        getWeatherAsync({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        })
      );
    });
  }, []);

  if (status === 'loading' || status === 'failed') return <SkeletonLoader />;

  return (
    <div className="home-page">
      <div className="block">
        <div className="block-header">
          <img src={current.condition.icon} alt="" />
          <h3>{current.condition.text}</h3>
        </div>
        <div className="block-body">
          <div className="temperature">
            {current.temp_c}
            <sup>o</sup>C
          </div>
        </div>
        <div className="block-footer block-footer--list">
          <div className="footer-block">
            <span>Pressure</span>
            <p>{current.pressure_mb}mb</p>
          </div>
          <div className="footer-block">
            <span>Visibility</span>
            <p>{current.vis_km}km</p>
          </div>
          <div className="footer-block">
            <span>Humadity</span>
            <p>{current.humidity}%</p>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block-header">
          <span>
            <TiWeatherWindy />
          </span>
          <div>
            <h3>Air Quality</h3>
            <span>Air Speed: {Math.floor(current.wind_kph * (10 / 36))}</span>
          </div>
        </div>
        <div className="block-body">
          <div className="temperature">{current.wind_degree}</div>
          <p>{current.wind_dir}</p>
        </div>
        <div className="block-footer">
          <div className="footer-block footer-block--air">
            <div className="footer-list">
              <span>Good</span>
              <span>Unhealthy</span>
              <span>Hazardous</span>
            </div>
            <div className="footer-range">
              <div
                className="footer-range__bar"
                style={{
                  width: `${current.air_quality['us-epa-index'] * 12}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <WeatherBlock />
      <div className="block block--tomorrow">
        <div className="block-header">
          <h3>Tomorrow</h3>
        </div>
        <div className="block-body">
          <p>
            {location.name}, <br />
            {location.region}
          </p>
          <div className="block-body__wrapper">
            <img
              className="block-body__img"
              src={forecast.forecastday[1].day.condition.icon}
              alt=""
            />
            <span className="block-footer__temp">
              {Math.floor(forecast.forecastday[1].day.avgtemp_c)}
              <sup>o</sup>C
            </span>
          </div>
        </div>
        <div className="block-footer">
          <p className="block-footer__weather">
            {forecast.forecastday[1].day.condition.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
