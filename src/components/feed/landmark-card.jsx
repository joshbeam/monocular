import React from 'react';
import { Slider } from '../ratchet';

export default class extends React.Component {
  render() {
    let landmark = this.props.landmark;
    let images = this.props.images;

    return (
      <div className="content-padded" style={{ padding: '10px', boxShadow: '0 0 5px #ccc' }}>
        <header className="bar-standard bar-header-secondary">
          <h3 style={{ textTransform: 'capitalize' }}>{landmark.name.split('-').join(' ')}</h3>
        </header>
        <div style={{ textTransform: 'uppercase' }}>
          <p style={{ textAlign: 'right' }}>
            {landmark.photos.length} photos
          </p>
        </div>
        <Slider children={images} />
      </div>
    );
  }
};

/**
          <div className="badge badge-primary">
            {landmark.weather.main}, {Math.floor(landmark.weather.temp)}&deg; F
          </div>
          **/