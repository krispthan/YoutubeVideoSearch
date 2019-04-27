import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos }) => {
    //created  from state to props got our videos into a list of components
    const renderList = videos.map((video) => {
        return <VideoItem video = {video} />
    })
    return (
        <div className= "ui relaxed divided list">{renderList} </div>
    );
}

export default VideoList;