import React from 'react';
import { connect } from 'dva';
import { hot } from 'react-hot-loader'

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localCount: 0,
    };
  }

  render() {
    return <div>
      <span>count: {this.props.count.count}</span>
      <span> ; </span>
      <span>local count: {this.state.localCount}</span>
    </div>;
  }
}


export default connect(({count}) => ({count}))(hot(module)(Count))
