'use strict';

import React from 'react';

export default React.createClass({
  displayName: 'Button',
  propTypes: {
    text: React.PropTypes.string.isRequired,
    href: React.PropTypes.string,
    type: React.PropTypes.string
  },
  render() {
    return (
        <a href={this.props.href}>
          <button type={this.props.type} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          {this.props.text}
          </button>
        </a>
    );
  }
});
