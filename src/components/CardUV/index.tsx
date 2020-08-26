import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardUV: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="UV Index">
      <>
        <p>{weather.uvi}</p>
      </>
    </Card>
  );
};
export default CardUV;
