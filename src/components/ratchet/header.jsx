import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  render() {
    return (
      <header className="bar bar-nav">
        <h1 className="title">{this.props.title}</h1>
      </header>
    );
  }
}
