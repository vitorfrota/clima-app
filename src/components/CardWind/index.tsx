import React from 'react';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardWind: React.FC = () => {
  const { selectedForecast } = useWeather();

  return (
    <Card title="Wind speed">
      <S.Container>
        <p>
          {selectedForecast.wind_speed}
          <span>km/h</span>
        </p>
        <S.Compass>
          <S.CompassIndicator degree={selectedForecast.wind_deg} />
        </S.Compass>

        {/* <span>
          {selectedForecast.wind_deg}
          °
        </span> */}
      </S.Container>
    </Card>
  );
};

export default CardWind;
