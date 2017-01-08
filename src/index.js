import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDZ57pcmkRwqo3Rei23l3ZwFDr9aKpv7i4';

const App = () => {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Telescopes are Time Machines</h1>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));