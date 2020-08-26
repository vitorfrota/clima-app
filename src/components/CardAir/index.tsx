import React from 'react';

import Card from '../Card';

import * as S from './styles';

const CardAir: React.FC = () => (
  <Card title="Air quality">
    <>
      <p>102</p>
      <span>Unheatly for sensitive groups</span>
    </>
  </Card>
);

export default CardAir;
