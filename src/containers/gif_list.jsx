import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { selectGif } from '../actions/index';

import Gif from '../components/gif';


class GifList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { gifs } = this.props;
    return gifs !== nextProps.gifs;
  }

  // handleClick = () => {
  //   console.log(this);
  // }

  render() {
    const { gifs, selectGif } = this.props;
    if (!gifs || !gifs.length) {
      return (
        <div className="gif-list" />
      );
    }

    return (
      <div className="gif-list">
        {
          gifs.map(({ id }) => {
            return <div><Gif id={id} key={id} className="blue" onClick={() => selectGif(id)} /></div>;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectGif },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
