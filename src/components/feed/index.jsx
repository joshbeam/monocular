import React from 'react';
import { Card, Header, Slider } from '../ratchet';
import LandmarkCard from './landmark-card.jsx';
import Api from '../../data';
import moment from 'moment';

export default class extends React.Component {
  componentWillMount() {
    this.state = {
      landmarks: null
    };

    new Api().get('landmarks?num_photos=10')
    .then((landmarks) => {
      this.setState({ landmarks });
    });
  }

  showModal(data) {
    console.log(true);
  }

  render() {
    let landmarks;
    const loading = this.state.landmarks ? '' : 'Loading...';

    if(this.state.landmarks) {
      landmarks = this.state.landmarks.map((landmark, i) => {
        let images = landmark.photos.map((photo, i) => {
          return (
            {
              image: (<div>
                      <img src={photo.src} key={i} style={{
                        margin: '0 auto',
                        display: 'block',
                        maxWidth: '100%',
                        maxHeight: '480px'
                      }} />
                      <span className="badge badge-inverted">
                        {moment(+photo.date_taken).fromNow()}
                      </span>
                    </div>),

              title: landmark.name
            }
          );
        });

        return <LandmarkCard landmark={landmark} images={images} key={i} />
      });
    }

    return (
      <div onTap={this.showModal.bind(this)}>
        <Header title="Monocular" />
        <div className="content">
          {loading}
          {landmarks}
        </div>
      </div>
    );
  }
}
