import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from './components/Layout';
import Routes from './components/Router';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
