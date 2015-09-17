import React from 'react';
import moment from 'moment';
import { Slider } from '../ratchet';

export default class extends React.Component {
  render() {
    let landmark = this.props.landmark;
    let images = this.props.images;

    return (<div className="content-padded" style={{ padding: '10px', boxShadow: '0 0 5px #ccc' }}>
      <header className="bar-standard bar-header-secondary">
        <a className="icon icon-right-nav pull-right"></a>
        <h3 style={{ textTransform: 'capitalize' }}>{landmark.name.split('-').join(' ')}</h3>
      </header>
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
