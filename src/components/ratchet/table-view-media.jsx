import React from 'react';

export default class extends React.Component {
  render() {
    let cells = this.props.children.map((child) => {
      return (
        <li className="table-view-cell media">
          <a className={child.navigate ? 'navigate-right' : ''} href={child.navigate ? '' : '#'}>
            <img className="media-object pull-left" src={child.src} />
            <div className="media-body">
              {child.title}
              <p>
                {child.description}
              </p>
            </div>
          </a>
        </li>
      );
    });

    return (
      <ul className="table-view">
        {cells}
      </ul>
    );
  }
};
