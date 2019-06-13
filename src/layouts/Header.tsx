import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './Header.less';
import GlobalHeader from '@/components/GlobalHeader';
const { Header } = Layout;

export interface HeaderViewProps {
  collapsed: boolean;
  handleMenuCollapsed: (e: boolean) => void
}

class HeaderView extends Component<HeaderViewProps> {
  constructor(props: HeaderViewProps) {
    super(props);
    this.state = {};
  }

  handleMenuClick = ({ key }) => {
    const { dispatch } = this.props;
    if ('logout') {
      dispatch({
        type: 'login/logout',
      });
    }
  };

  render() {
    return (
      <Header
        style={{
          background: '#fff',
          padding: 0,
        }}
      >
        {/* Ant Design Pro 这里采取两种导航样式 因此 Header 组件也需要颗粒化组件*/}
        <GlobalHeader
          onMenuClick={this.handleMenuClick}
          onCollapse={this.props.handleMenuCollapsed}
          {...this.props}
        />
      </Header>
    );
  }
}

export default connect(({ global }) => ({}))(HeaderView);
