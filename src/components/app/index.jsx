import React from 'react';
import { Card, Header, Slider, TableViewMedia } from '../ratchet';
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
    let table;

    if(this.state.landmarks) {
      landmarks = this.state.landmarks.map((landmark, i) => {
        return {
          src: landmark.photos[0].src,
          title: landmark.name,
          description: 'I love you',
          navigate: true
        };
      });

      table = (
        <TableViewMedia children={landmarks} />
      );
    }

    return (
      <div>
        <Header title="Monocular" />
        <div className="content">
          {table}
        </div>
      </div>
    );
  }
}
