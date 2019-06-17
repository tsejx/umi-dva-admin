import React, { Component } from 'react';

interface MonitorProps {}
class Monitor extends React.Component<MonitorProps> {
  constructor(props: MonitorProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Monitor</div>;
  }
}

export default Monitor;
