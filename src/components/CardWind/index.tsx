import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardWind: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="Wind speed">
      <>
        <p>
          {weather.wind.speed}
          km/h
        </p>
        <span>
          {weather.wind.degree}
          °
        </span>
      </>
    </Card>
  );
};

export default CardWind;
