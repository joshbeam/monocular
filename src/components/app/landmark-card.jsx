import React from 'react';
import moment from 'moment';
import { Slider } from '../ratchet';

export default class extends React.Component {
  render() {
    let landmark = this.props.landmark;
    let images = this.props.images;

    return (<div className="content-padded">
      <h1 style={{ textTransform: 'capitalize' }}>{landmark.name.split('-').join(' ')}</h1>
      <div style={{ textTransform: 'uppercase' }}>
        <div className="badge badge-primary">
          {landmark.weather.main}, {Math.floor(landmark.weather.temp)}&deg; F
        </div>
        <p style={{ textAlign: 'right' }}>
          {landmark.photos.length} photos added {moment(landmark.photos[0].date_taken).fromNow()}
        </p>
      </div>
      <Slider children={images} />
    </div>);
  }
};
