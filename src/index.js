import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDZ57pcmkRwqo3Rei23l3ZwFDr9aKpv7i4';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 'videos': [] };
  
    YTSearch({ key: API_KEY, term: 'telescopes' }, (videos) => {
      this.setState({ videos }); //es6 syntax equal to { 'videos': videos }
    })

  }
  render() {
    return (
      <div>
        <h1 style={{ color: 'blue' }}>Telescopes are Time Machines</h1>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));