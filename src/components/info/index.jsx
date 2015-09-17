import React from 'react';
import { Link } from 'react-router';
import Header from '../ratchet/header';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Link to="feed"><Header title="Monocular" /></Link>
        <div className="content">
          <p>Info</p>
        </div>
      </div>
    );
  }
};
