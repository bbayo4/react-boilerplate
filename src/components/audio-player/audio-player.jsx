import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.Component {

  constructor (props) {
    super(props);
    this.playerId = Date.now();
    this.hls = null;
    this.audioEl = React.createRef();
  }

  componentDidUpdate () {
    this.initPlayer();
  }

  componentDidMount () {
    if(this.props.stream){
      this.initPlayer();
    }
  }

  componentWillUnmount () {
    let { hls } = this;
    if (hls) {
      hls.destroy();
    }
  }

  initPlayer () {
    if (this.hls) {
      this.hls.destroy();
    }
    let hls = new Hls({});
    hls.loadSource(this.props.url);
    hls.attachMedia(this.audioEl.current);
    this.hls = hls;
  }

  render () {
    return (
      <audio src={this.props.url}
             ref={this.audioEl}
             id={`react-hls-${this.playerId}`}
             controls={this.props.controls} playsInline>
      </audio>
    )
  }
}

AudioPlayer.propTypes = {
  url : PropTypes.string.isRequired,
  stream: PropTypes.bool,
  controls : PropTypes.bool
};

AudioPlayer.defaultProps = {
  url : '//',
  stream: true,
  controls : false
};

export default AudioPlayer;