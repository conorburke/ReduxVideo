import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDZ57pcmkRwqo3Rei23l3ZwFDr9aKpv7i4';

const App = () => {
  return (
    <div>Telescopes are Time Machines
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));