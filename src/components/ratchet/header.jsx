import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  render() {
    return (
      <header className="bar bar-nav">
        <Link to="info">
          <button className="btn btn-link btn-nav pull-right">
            <span className="icon icon-info"></span>
          </button>
        </Link>
        <h1 className="title">{this.props.title}</h1>
      </header>
    );
  }
}
