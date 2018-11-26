import React from 'react';
import AudioPlayer from '../audio-player/audio-player'
import Music from '../../media/music.mp3';

const Media = () => {
  return(
    <div className="media-wrapper">
      <AudioPlayer url={Music} stream={false} controls={true} />
    </div>
  );
};

export default Media;