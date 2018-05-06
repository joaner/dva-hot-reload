import React from 'react';
import { connect } from 'dva';

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localCount: 0,
    };
  }

  render() {
    return <div>
      <span>count: {0}</span>
      <span> ; </span>
      <span>local count: {this.state.localCount}</span>
    </div>;
  }
}


export default connect(({count}) => ({count}))(Count);
