import React from 'react';

export default class Count extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      localCount: 0,
    };
    console.log('hello');
  }

  render() {
    console.log(window.t = this);
    return <div>
      <span>count: {0}</span>
      <span> ; </span>
      <span>local count: {this.state.localCount}</span>
    </div>;
  }
}
