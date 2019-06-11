import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './BasicLayout.less';
import Header from './Header';
import Footer from './Footer';
import SideMenu from '@/components/SideMenu';

import Link from 'umi/link'

class BasicLayout extends React.PureComponent {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount() {
    const {
      dispatch,
      route: { routes },
    } = this.props;

    dispatch({
      type: 'menu/getMenuData',
      payload: {
        routes,
      },
    });
  }

  handleMenuCollapsed = (e) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'global/onSideMenuCollapsed',
      payload: e
    })
  };

  render() {
    const { menuData, collapsed } = this.props;

    return (
      <Layout className={styles['basic-layout']}>
        <SideMenu menuData={menuData} collapsed={collapsed} />
        <Layout>
          <Header
            collapsed={collapsed}
            handleMenuCollapsed={this.handleMenuCollapsed}
            {...this.props}
          />
          <div className={styles.content}>
            <div className={styles.wrapper}>{this.props.children}</div>
          </div>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default connect(({ global, menu }) => {
  return {
    collapsed: global.collapsed,
    menuData: menu.menuData,
  };
})(props => <BasicLayout {...props} />);
