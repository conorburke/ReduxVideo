import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDZ57pcmkRwqo3Rei23l3ZwFDr9aKpv7i4';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
     };
    this.videoSearch('telescopes')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    })
  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <h1 style={{ color: 'blue' }}>Telescopes are Time Machines</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));