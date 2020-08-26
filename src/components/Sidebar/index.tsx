import React from 'react';
import Lottie from 'lottie-react-web';
import {
  FiNavigation, FiArrowUp, FiArrowDown, FiThermometer,
} from 'react-icons/fi';

import animations from '../../assets/weather_animations';

import { useWeather } from '../../hooks/weather';
import convertDegree from '../../utils/convertDegree';

import * as S from './styles';

function getAnimation(id: string = '13d'): any {
  const key = '_11d';

  return animations[key];
}

const Sidebar: React.FC = () => {
  const { data: weather } = useWeather();

  return (
    <S.Container>
      <S.Location>
        <FiNavigation />
        <p>
          {weather.name}
          ,
          {' '}
          {weather.sys.country}
        </p>
      </S.Location>
      <S.WeatherContainer>
        <div className="date">
          <strong>Hoje,</strong>
          {' '}
          20 de agosto de 2020.
        </div>
        <S.WeatherAnimation>
          <Lottie
            options={{
              animationData: getAnimation('13d'),
            }}
          />
        </S.WeatherAnimation>
        <S.WeatherData>
          <p>
            {convertDegree(weather.main.temp, 'celsius').toFixed(0)}
            °
          </p>
          <span>{weather.weather[0].description}</span>
        </S.WeatherData>
      </S.WeatherContainer>
      <S.WeatherAdditional>
        <S.WeatherAdditionalItem>
          <header>
            <FiArrowDown />
            <p>Min</p>
          </header>
          <p>{weather.main.temp_min}</p>
        </S.WeatherAdditionalItem>
        <S.WeatherAdditionalItem>
          <header>
            <FiArrowUp />
            <p>Max</p>
          </header>
          <p>{weather.main.temp_max}</p>
        </S.WeatherAdditionalItem>
        <S.WeatherAdditionalItem>
          <header>
            <FiThermometer />
            <p>Feel</p>
          </header>
          <p>{weather.main.feels_like}</p>
        </S.WeatherAdditionalItem>
      </S.WeatherAdditional>
    </S.Container>
  );
};

export default Sidebar;
