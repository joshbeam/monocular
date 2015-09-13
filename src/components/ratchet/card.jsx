import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}
