import React from 'react';
import SearchBar from './Components/SearchBar';
import youtube from './API/youtube';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/Detail';

class App extends React.Component{
  state = {  videos: [], selectedVideo : null };
  onTermSubmit =  async (term) => {
    const response = await youtube.get('/search', {//async api request and use a promise 
      params: {
        q:term
      }
    });
   
    this.setState({ videos: response.data.items });
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }
  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit = { this.onTermSubmit }/>
        <VideoDetail video ={this.state.selectedVideo}/>
        <VideoList onVideoSelect ={this.onVideoSelect} videos = {this.state.videos}/>        
      </div>
     )
  }
}

export default App;
