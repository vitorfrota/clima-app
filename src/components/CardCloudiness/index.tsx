import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardCloudiness: React.FC = () => {
  const { selectedForecast } = useWeather();

  return (
    <Card title="Cloudiness">
      <S.Container>
        <p>
          {selectedForecast.clouds}
          <span>%</span>
        </p>
      </S.Container>
    </Card>
  );
};

export default CardCloudiness;
