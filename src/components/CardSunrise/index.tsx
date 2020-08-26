import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardSunrise: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="Sunrise & Sunset">
      <>
        <span>{weather.sunrise}</span>
        <span>{weather.sunset}</span>
      </>
    </Card>
  );
};

export default CardSunrise;
