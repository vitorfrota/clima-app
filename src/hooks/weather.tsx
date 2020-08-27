import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import { format, fromUnixTime } from 'date-fns';

import api from '../services/api';

import convertDegree from '../utils/convertDegree';

interface ForecastData {
  id: number;
  date: number;
  sunrise: string;
  sunset: string;
  humidity: number;
  wind_speed: number;
  wind_deg: number;
  icon_id: string;
  temp: number;
  description: string;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  clouds: number;
  uvi: number;
  pressure: number;
}

interface WeatherContextData {
  selectedForecast: ForecastData;
  forecastData: ForecastData[];
  location: string;
  loadWeatherData(latitude: number, longitude: number): Promise<void>;
  handleChangeForecastDay(id: number): void;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

const WeatherProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState('');
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [selectedForecast, setSelectedForecast] = useState({} as ForecastData);

  const loadWeatherData = useCallback(async (latitude: number, longitude: number) => {
    try {
      const { data } = await api.get(
        `onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`,
      );

      const { data: dataWeather } = await api.get(
        `weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`,
      );

      const locationFormatted = `${dataWeather.name}, ${dataWeather.sys.country}`;

      setLocation(locationFormatted);

      const dataFormatted = data.daily.slice(0, 7).map((item: any) => ({
        id: item.dt,
        date: item.dt,
        icon_id: item.weather[0].icon,
        description: item.weather[0].description,
        temp: convertDegree(item.temp.day, 'celsius'),
        temp_min: convertDegree(item.temp.min, 'celsius'),
        temp_max: convertDegree(item.temp.max, 'celsius'),
        feels_like: convertDegree(item.feels_like.day, 'celsius'),
        sunrise: format(fromUnixTime(item.sunrise), 'p'),
        sunset: format(fromUnixTime(item.sunset), 'p'),
        wind_speed: item.wind_speed,
        wind_deg: item.wind_deg,
        uvi: item.uvi,
        pressure: item.pressure,
        humidity: item.humidity,
        clouds: item.clouds,
      }));

      setForecastData(dataFormatted);
      setSelectedForecast(dataFormatted[0]);
    } catch (e) {
      console.log(`${e}Ocorreu um erro ao tentar buscar os dados!`);
    }
  }, []);

  const handleChangeForecastDay = useCallback((id: number) => {
    const forecastDay = forecastData.find((item) => item.id === id);

    if (forecastDay) {
      setSelectedForecast(forecastDay);
    }
  }, [forecastData]);

  return (
    <WeatherContext.Provider
      value={{
        location,
        forecastData,
        selectedForecast,
        handleChangeForecastDay,
        loadWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

function useWeather(): WeatherContextData {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeather must be used within an WeatherProvider');
  }

  return context;
}

export { WeatherProvider, useWeather };
