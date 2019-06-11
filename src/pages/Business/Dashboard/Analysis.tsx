import React, { Component } from 'react';
import styles from './Analysis.less';
import { Form } from 'antd';

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Analysis</div>;
  }
}

export default Form.create()(Analysis);
