import React from 'react';
import { connect } from 'dva'
import { Layout, Icon } from 'antd';
import styles from './Header.less';
import GlobalHeader from '@/components/GlobalHeader';
const { Header } = Layout;

class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleMenuClick = ({ key }) => {
    const { dispatch }  = this.props;
    if ('logout') {
      dispatch({
        type: 'Login/logout'
      })
    }
  };

  render() {
    const { handleMenuCollapsed } = this.props;

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
          onCollapse={handleMenuCollapsed}
          {...this.props}
        />
      </Header>
    );
  }
}

export default connect(({Global}) => {
  return {

  }
})(HeaderView);
