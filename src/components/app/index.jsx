import React from 'react';
import moment from 'moment';
import { Card, Header, Slider } from '../ratchet';
import Api from '../../data';

export default class extends React.Component {
  componentWillMount() {
    this.state = {
      landmarks: null
    };

    new Api().get('landmarks')
    .then((landmarks) => {
      this.setState({ landmarks });
    });
  }

  render() {
    let landmarks;

    if(this.state.landmarks) {
      landmarks = this.state.landmarks.map((landmark, i) => {
        let images = landmark.photos.map((photo, i) => {
          return (
            <img src={photo.src} key={i} style={ {
              margin: '0 auto',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '480px'
            } } />
          );
        });

        return (
          <div className="content-padded">
            <h1 style={ { textTransform: 'capitalize' } }>{landmark.name.split('-').join(' ')}</h1>
            <h5>{landmark.weather.main}, {Math.floor(landmark.weather.temp)}&deg; F</h5>
            <h5>Latest photo added {moment(landmark.photos[0].date_taken).fromNow()} (showing {landmark.photos.length})</h5>
            <Slider style={{ background: 'white' }} children={images} key={i} />
          </div>
        );
      });
    }

    return (
      <div>
        <Header title="Monocular" />
        <div className="content">{landmarks}</div>
      </div>
    );
  }
}
