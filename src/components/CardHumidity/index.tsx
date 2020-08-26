import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardHumidity: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="Humidity">
      <>
        <p>
          {weather.humidity}
          %
        </p>
      </>
    </Card>
  );
};

export default CardHumidity;
