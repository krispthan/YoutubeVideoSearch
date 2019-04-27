import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect }) => {
    //created  from state to props got our videos into a list of components
    const renderList = videos.map((video) => {
        return <VideoItem onVideoSelect={ onVideoSelect } video = {video} />
    })
    return (
        <div className= "ui relaxed divided list">{renderList} </div>
    );
}

export default VideoList;