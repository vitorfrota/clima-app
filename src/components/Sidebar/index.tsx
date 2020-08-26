import React from 'react';
import {
  FiNavigation, FiArrowUp, FiArrowDown, FiThermometer,
} from 'react-icons/fi';

import * as S from './styles';

const Sidebar: React.FC = () => (
  <S.Container>
    <S.Location>
      <FiNavigation />
      <p>Manaus, BR</p>
    </S.Location>
    <S.WeatherContainer>
      <div className="date">
        <strong>Hoje,</strong>
        {' '}
        20 de agosto de 2020.
      </div>
      <S.WeatherAnimation />
      <S.WeatherData>
        <p>32°</p>
        <span>Dia claro</span>
      </S.WeatherData>
    </S.WeatherContainer>
    <S.WeatherAdditional>
      <S.WeatherAdditionalItem>
        <header>
          <FiArrowDown />
          <p>Min</p>
        </header>
        <p>25°</p>
      </S.WeatherAdditionalItem>
      <S.WeatherAdditionalItem>
        <header>
          <FiArrowUp />
          <p>Max</p>
        </header>
        <p>37°</p>
      </S.WeatherAdditionalItem>
      <S.WeatherAdditionalItem>
        <header>
          <FiThermometer />
          <p>Feel</p>
        </header>
        <p>34°</p>
      </S.WeatherAdditionalItem>
    </S.WeatherAdditional>

  </S.Container>
);

export default Sidebar;
