import React from 'react';

import Card from '../Card';

import * as S from './styles';

const CardWind: React.FC = () => (
  <Card title="Wind speed">
    <>
      <p>7.5km/h</p>
      <span>230°</span>
    </>
  </Card>
);

export default CardWind;
