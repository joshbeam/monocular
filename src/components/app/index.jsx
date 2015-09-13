import React from 'react';
import { Card, Header, Slider } from '../ratchet';

export default class extends React.Component {
  render() {
    let sliderChildren = [
      <img src="http://globe-views.com/dcim/dreams/smile/smile-06.jpg" id="1" />,
      <img src="http://images.clipartpanda.com/smile-clipart-aTqBqMBTM.jpeg" id="2" />
    ];

    return (
      <div>
        <Header title="Monocular" />
        <Slider children={sliderChildren} />
      </div>
    );
  }
}
