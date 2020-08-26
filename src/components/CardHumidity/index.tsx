import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardHumidity: React.FC = () => {
  const { selectedForecast } = useWeather();

  return (
    <Card title="Humidity">
      <S.Container>
        <p>
          {selectedForecast.humidity}
          <span>%</span>
        </p>
        <S.Measurer percentage={selectedForecast.humidity}>
          <div className="indicator" />
        </S.Measurer>
      </S.Container>
    </Card>
  );
};

export default CardHumidity;
