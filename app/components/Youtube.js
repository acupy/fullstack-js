import React from 'react';

const Youtube = React.createClass({
  render: function(){
    return (
      <iframe
        width={this.props.width || 420}
        height={this.props.height || 315}
        src={this.props.url}>
      </iframe>
    );
  }
});
export default Youtube;
