import React, { useEffect } from 'react';

import Main from '../Main';
import Sidebar from '../Sidebar';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const Layout: React.FC = () => {
  const { loadWeatherData, data } = useWeather();

  useEffect(() => {
    loadWeatherData();
  }, [loadWeatherData]);

  return (
    <S.Container>
      {
      data.weather && (
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
