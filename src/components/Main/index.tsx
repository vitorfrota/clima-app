import React from 'react';

import CardPressure from '../CardPressure';
import CardHumidity from '../CardHumidity';
import CardSunrise from '../CardSunrise';
import CardUV from '../CardUV';
import CardCloudiness from '../CardCloudiness';
import CardWind from '../CardWind';

import * as S from './styles';
import Forecast from '../Forecast';

const Main: React.FC = () => (
  <S.Container>
    <h1>Highlights</h1>
    <S.CardsGroup>
      <CardUV />
      <CardHumidity />
      <CardWind />
      <CardCloudiness />
      <CardSunrise />
      <CardPressure />
    </S.CardsGroup>
    <h1>Week Forecast</h1>
    <Forecast />
  </S.Container>
);

export default Main;
