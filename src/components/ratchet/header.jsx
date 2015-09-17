import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <header className="bar bar-nav">
        <h1 className="title">{this.props.title}</h1>
        <a className="icon icon-info pull-right"></a>
      </header>
    );
  }
}
