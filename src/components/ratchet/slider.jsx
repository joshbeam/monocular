import React from 'react';

export default class extends React.Component {
  render() {
    let children = this.props.children.map((child, i) => {
      return (
        <div className="slide" key={i}>
          {child.image}
        </div>
      );
    });

    return (
      <div className="slider" style={{ backgroundColor: 'white' }}>
        <div className="slide-group">
          {children}
        </div>
      </div>
    );
  }
}
