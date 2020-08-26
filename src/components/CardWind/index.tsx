import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardWind: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="Wind speed">
      <S.Container>
        <p>
          {weather.wind.speed}
          <span>km/h</span>
        </p>
        <span>
          {weather.wind.degree}
          °
        </span>
      </S.Container>
    </Card>
  );
};

export default CardWind;
