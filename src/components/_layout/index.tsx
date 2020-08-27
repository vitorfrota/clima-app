import React, { useEffect, useMemo, useState } from 'react';

import Message from '../Message';
import Main from '../Main';
import Sidebar from '../Sidebar';

import { useWeather } from '../../hooks/weather';

import * as S from './styles';

const Layout: React.FC = () => {
  const { loadWeatherData, forecastData } = useWeather();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      loadWeatherData(latitude, longitude);
    });
  }, [loadWeatherData]);

  return (
    <S.Container>
      {
       forecastData.length > 0 ? (
         <>
           <Sidebar />
           <Main />
         </>
       )
         : (
           <Message />
         )

      }

    </S.Container>
  );
};

export default Layout;
