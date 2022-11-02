import './partials/_app.scss';
import React from 'react';
import Header from './Header';
import Api from './Api';
import './partials/_index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Api />
    </div>
  )
}

export default App;

