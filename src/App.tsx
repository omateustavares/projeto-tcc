import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import { Header } from '../src/components/Header';

import Routes from './routes';
import './locales/translate';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
};

export default App;
