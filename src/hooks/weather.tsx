import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import { format, fromUnixTime } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../services/api';

import convertDegree from '../utils/convertDegree';

interface Weather {
  location: string;
  icon_id: string;
  temp: number;
  description: string;
  feels_like: number;
  date: string;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: {
    speed: number;
    degree: number;
  };
  sunrise: string;
  sunset: string;
  visibility: number;
  uvi: number;
  pressure: number;
}

interface WeatherContextData {
  weather: Weather;
  loadWeatherData(): Promise<void>;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState({} as Weather);

  const loadWeatherData = useCallback(async () => {
    try {
      const { data } = await api.get('954fa5b0-48f8-4547-850d-9331631a1e6a');
      console.log(data);

      const dataFormatted: Weather = {
        location: `${data.name}, ${data.sys.country}`,
        icon_id: data.weather[0].icon,
        temp: convertDegree(data.main.temp, 'celsius'),
        description: data.weather[0].description,
        feels_like: convertDegree(data.main.feels_like, 'celsius'),
        date: format(fromUnixTime(data.dt), "dd 'de' MMMM 'de' yyyy", {
          locale: ptBR,
        }),
        temp_min: convertDegree(data.main.temp_min, 'celsius'),
        temp_max: convertDegree(data.main.temp_max, 'celsius'),
        humidity: data.main.humidity,
        wind: {
          speed: data.wind.speed,
          degree: data.wind.deg,
        },
        sunrise: format(fromUnixTime(data.sys.sunrise), 'p'),
        sunset: format(fromUnixTime(data.sys.sunset), 'p'),
        visibility: data.visibility / 1000,
        uvi: 1,
        pressure: data.main.pressure,
      };

      setWeather(dataFormatted);
    } catch (e) {
      console.log(`${e}Ocorreu um erro ao tentar buscar os dados!`);
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weather,
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
