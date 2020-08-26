import React, { useEffect } from 'react';

import Main from '../Main';
import Sidebar from '../Sidebar';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const Layout: React.FC = () => {
  const { loadWeatherData, weather } = useWeather();

  useEffect(() => {
    loadWeatherData();
  }, [loadWeatherData]);

  return (
    <S.Container>
      {
      weather.wind && (
        <>
          <Sidebar />
          <Main />
        </>
      )

      }

    </S.Container>
  );
};

export default Layout;
