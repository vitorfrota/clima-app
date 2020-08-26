import React from 'react';
import Lottie from 'lottie-react-web';
import {
  FiNavigation, FiArrowUp, FiArrowDown, FiThermometer,
} from 'react-icons/fi';

import animations from '../../assets/weather_animations';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

function getAnimation(id: string): JSON {
  const key = `_${id}`;

  return animations[key];
}

const Sidebar: React.FC = () => {
  const { weather } = useWeather();

  return (
    <S.Container>
      <S.Location>
        <FiNavigation />
        <p>
          {weather.location}
        </p>
      </S.Location>
      <S.WeatherContainer>
        <div className="date">
          <strong>Hoje,</strong>
          {' '}
          {weather.date}
        </div>
        <S.WeatherAnimation>
          <Lottie
            options={{
              animationData: getAnimation(weather.icon_id),
            }}
          />
        </S.WeatherAnimation>
        <S.WeatherData>
          <p>
            {weather.temp}
            °
          </p>
          <span>{weather.description}</span>
        </S.WeatherData>
      </S.WeatherContainer>
      <S.WeatherAdditional>
        <S.WeatherAdditionalItem>
          <header>
            <FiArrowDown />
            <p>Min</p>
          </header>
          <p>
            {weather.temp_min}
            °
          </p>
        </S.WeatherAdditionalItem>
        <S.WeatherAdditionalItem>
          <header>
            <FiArrowUp />
            <p>Max</p>
          </header>
          <p>
            {weather.temp_max}
            °
          </p>
        </S.WeatherAdditionalItem>
        <S.WeatherAdditionalItem>
          <header>
            <FiThermometer />
            <p>Feel</p>
          </header>
          <p>
            {weather.feels_like}
            °
          </p>
        </S.WeatherAdditionalItem>
      </S.WeatherAdditional>
    </S.Container>
  );
};

export default Sidebar;
