import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardVisibility: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="Visibility">
      <>
        <p>
          {weather.visibility}
          km
        </p>
      </>
    </Card>
  );
};

export default CardVisibility;
