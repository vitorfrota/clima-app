import React, { useMemo } from 'react';
import Lottie from 'lottie-react-web';
import { format, fromUnixTime } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  FiNavigation, FiArrowUp, FiArrowDown, FiThermometer,
} from 'react-icons/fi';

import getAnimation from '../../assets/weather_animations';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const Sidebar: React.FC = () => {
  const { selectedForecast, location } = useWeather();

  const dateFormatted = useMemo(() => {
    if (selectedForecast.date) {
      const date = format(fromUnixTime(selectedForecast.date), "dd 'de' MMMM 'de' yyyy", {
        locale: ptBR,
      });

      return date;
    }
  }, [selectedForecast]);

  const dayFormatted = useMemo(() => {
    if (selectedForecast.date) {
      const date = format(fromUnixTime(selectedForecast.date), 'eeee', {
        locale: ptBR,
      });
      return date;
    }
  }, [selectedForecast]);

  return (
    <S.Container>
      <S.Location>
        <FiNavigation />
        <p>
          {location}
        </p>
      </S.Location>
      <S.WeatherContainer>
        <div className="date">
          <strong>
            {dayFormatted}
            ,
          </strong>
          {' '}
          {dateFormatted}
        </div>
        <S.WeatherAnimation>
          <Lottie
            options={{
              animationData: getAnimation(selectedForecast.icon_id),
            }}
          />
        </S.WeatherAnimation>
        <S.WeatherData>
          <p>
            {selectedForecast.temp}
            °
          </p>
          <span>{selectedForecast.description}</span>
        </S.WeatherData>
      </S.WeatherContainer>
      <S.WeatherAdditional>
        <S.WeatherAdditionalItem>
          <header>
            <FiArrowDown />
            <p>Min</p>
          </header>
          <p>
            {selectedForecast.temp_min}
            °
          </p>
        </S.WeatherAdditionalItem>
        <S.WeatherAdditionalItem>
          <header>
            <FiArrowUp />
            <p>Max</p>
          </header>
          <p>
            {selectedForecast.temp_max}
            °
          </p>
        </S.WeatherAdditionalItem>
        <S.WeatherAdditionalItem>
          <header>
            <FiThermometer />
            <p>Feel</p>
          </header>
          <p>
            {selectedForecast.feels_like}
            °
          </p>
        </S.WeatherAdditionalItem>
      </S.WeatherAdditional>
    </S.Container>
  );
};

export default Sidebar;
