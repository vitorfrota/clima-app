import React from 'react';
import { format, fromUnixTime } from 'date-fns';
import Lottie from 'lottie-react-web';

import { useWeather } from '../../hooks/weather';
import getAnimation from '../../assets/weather_animations';

import * as S from './styles';

const Forecast: React.FC = () => {
  const { forecastData, selectedForecast, handleChangeForecastDay } = useWeather();

  return (
    <S.Container>
      <S.ListForecast>
        {
        forecastData.map((day: any) => (
          <S.ForecastItem
            key={day.id}
            selected={selectedForecast.id === day.id}
            onClick={() => handleChangeForecastDay(day.id)}
          >
            <h3>{format(fromUnixTime(day.date), 'dd/MM')}</h3>
            <div className="animation">
              <Lottie
                options={{
                  animationData: getAnimation(day.icon_id),
                }}
              />
            </div>
            <p>
              {day.temp}
              °
            </p>
          </S.ForecastItem>
        ))
      }
      </S.ListForecast>

    </S.Container>
  );
};

export default Forecast;
