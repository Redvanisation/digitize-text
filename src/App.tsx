import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CameraPage from './pages/CameraPage';
import { globals } from './theme/globals';

function App() {
  return (
    <main className={globals}>
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/camera" component={CameraPage} />
          </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
