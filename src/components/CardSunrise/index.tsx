import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

import Card from '../Card';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const CardSunrise: React.FC = () => {
  const { selectedForecast } = useWeather();

  return (
    <Card title="Sunrise & Sunset">
      <S.Container>
        <S.Hour>
          <div className="sun">
            <FiArrowUp />
          </div>
          <span>{selectedForecast.sunrise}</span>
        </S.Hour>
        <S.Hour>
          <div className="sun">
            <FiArrowDown />
          </div>
          <span>{selectedForecast.sunset}</span>
        </S.Hour>
      </S.Container>
    </Card>
  );
};

export default CardSunrise;
