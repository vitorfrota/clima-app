import React from 'react';
import Lottie from 'lottie-react-web';

import loadingAnimation from '../../assets/loading.json';

import * as S from './styles';

const Message: React.FC = () => (
  <S.Container>
    <div className="animation">
      <Lottie
        options={{
          animationData: loadingAnimation,
        }}
      />

    </div>
    <h1>Precisamos da sua localização</h1>
    <p>Precisamos da sua localização para buscar informações de sua região.</p>
  </S.Container>
);

export default Message;
