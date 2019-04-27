import React from 'react';
import SearchBar from './Components/SearchBar';
import youtube from './API/youtube';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/Detail';

class App extends React.Component{
  state = {  videos: [], selectedVideo : null };
  componentDidMount(){
    this.onTermSubmit('cars')//when app first load we do search for buildings 
  }
  onTermSubmit =  async (term) => {
    const response = await youtube.get('/search', {//async api request and use a promise 
      params: {
        q:term
      }
    });
   
    this.setState({ 
      videos: response.data.items,
      selectedVideo : response.data.items[0]// when we do a search go ahead and take the first video and use it as default video
     });
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }
  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit = { this.onTermSubmit }/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video ={this.state.selectedVideo}/>
            </div>
          <div className="five wide column">
            <VideoList 
            onVideoSelect ={this.onVideoSelect}
            videos = {this.state.videos}
            /> 
          </div>  
        </div>
       </div>
         
      </div>
     )
  }
}

export default App;
