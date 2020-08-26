import React from 'react';

import Main from '../Main';
import Sidebar from '../Sidebar';

import * as S from './styles';

const Layout: React.FC = () => (
  <S.Container>
    <Sidebar />
    <Main />
  </S.Container>
);

export default Layout;
