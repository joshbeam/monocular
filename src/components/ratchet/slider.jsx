import React from 'react';

export default class extends React.Component {
  render() {
    let children = this.props.children.map((child, i) => {
      return (
        <div className="slide" key={i}>
          {child}
        </div>
      );
    });

    return (
      <div className="slider" id={this.props.id}>
        <div className="slide-group">
          {children}
        </div>
      </div>
    );
  }
}
