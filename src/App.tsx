import React from 'react';

import Layout from './components/_layout';

import AppProvider from './hooks';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => (
  <AppProvider>
    <Layout />
    <GlobalStyle />
  </AppProvider>
);

export default App;
