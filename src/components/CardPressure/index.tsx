import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardPressure: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="Pressure">
      <>
        <p>
          {weather.pressure}
          hPa
        </p>
      </>
    </Card>
  );
};

export default CardPressure;
