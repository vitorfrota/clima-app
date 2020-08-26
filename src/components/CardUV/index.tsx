import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardUV: React.FC = () => {
  const { selectedForecast } = useWeather();

  return (
    <Card title="UV Index">
      <S.Container>
        <p>{selectedForecast.uvi}</p>
      </S.Container>
    </Card>
  );
};
export default CardUV;
