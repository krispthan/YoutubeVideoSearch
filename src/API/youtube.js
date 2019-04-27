import axios from 'axios';
const KEY = 'AIzaSyAW6D-R_5kiIfTmEGNUyGRkRx0_rEG-HYY';
//create a preconfigure instance of axios 
//so we can get our instance and we will use this as youtube.get()

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }

});