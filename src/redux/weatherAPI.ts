import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
});

export async function getWeatherData(lat: number, long: number) {
  const { data } = await instance.get(
    `forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}&aqi=yes&days=3`
  );
  return data;
}
