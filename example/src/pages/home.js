import React from 'react';
import { connect } from 'dva';
import { hot } from 'react-hot-loader'

function Home() {
  return (
    <div>
      home
    </div>
  );
}

export default connect()(hot(module)(Home));
