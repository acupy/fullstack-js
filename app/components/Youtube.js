import React from 'react';

const Youtube = React.createClass({
  render: function(){
    return (
      <iframe
        width={this.props.width || 300}
        height={this.props.height || 300}
        src={this.props.url}>
      </iframe>
    );
  }
});
export default Youtube;
