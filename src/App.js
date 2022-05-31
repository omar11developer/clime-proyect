import React, { Fragment } from 'react';
import './App.css';
import NavbarMenu from './components/NavbarMenu';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <Fragment>
      <NavbarMenu/>
      <WeatherApp/>
    </Fragment>
  );
}

export default App;
