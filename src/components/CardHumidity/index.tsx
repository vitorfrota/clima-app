import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardHumidity: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="Humidity">
      <S.Container>
        <p>
          {weather.humidity}
          <span>%</span>
        </p>
        <S.Measurer percentage={weather.humidity}>
          <div className="indicator" />
        </S.Measurer>
      </S.Container>
    </Card>
  );
};

export default CardHumidity;
