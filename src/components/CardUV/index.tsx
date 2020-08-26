import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardUV: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="UV Index">
      <S.Container>
        <p>{weather.uvi}</p>
      </S.Container>
    </Card>
  );
};
export default CardUV;
