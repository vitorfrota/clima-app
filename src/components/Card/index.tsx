import React from 'react';

import * as S from './styles';

interface CardProps {
  title: string;
  children?: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, children }: CardProps) => (
  <S.Container>
    <h1>{title}</h1>
    <S.Content>
      {
      children
      }
    </S.Content>

  </S.Container>
);

export default Card;
