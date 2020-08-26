import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardVisibility: React.FC = () => {
  const { weather } = useWeather();

  return (
    <Card title="Visibility">
      <S.Container>
        <p>
          {weather.visibility}
          <span>km</span>
        </p>
      </S.Container>
    </Card>
  );
};

export default CardVisibility;
