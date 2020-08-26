import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../services/api';

interface WeatherContextData {
  data: any;
  loadWeatherData(): Promise<void>;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

const WeatherProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});

  const loadWeatherData = useCallback(async () => {
    try {
      const response = await api.get('47c03472-0f65-46ae-9e7d-4adb875a795a');
      setData(response.data);
    } catch (e) {
      console.log('Ocorreu um erro ao tentar buscar os dados!');
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        data,
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
