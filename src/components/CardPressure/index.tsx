import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardPressure: React.FC = () => {
  const { selectedForecast } = useWeather();

  return (
    <Card title="Pressure">
      <S.Container>
        <p>
          {selectedForecast.pressure}
          <span>hPa</span>
        </p>
      </S.Container>
    </Card>
  );
};

export default CardPressure;
