import React, { useEffect } from 'react';

import Main from '../Main';
import Sidebar from '../Sidebar';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const Layout: React.FC = () => {
  const { loadWeatherData, forecastData } = useWeather();

  useEffect(() => {
    loadWeatherData();
  }, [loadWeatherData]);

  return (
    <S.Container>
      {
      forecastData.length > 0 && (
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
