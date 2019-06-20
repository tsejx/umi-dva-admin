import { Dispatch } from 'redux';
import { ConnectState } from '@/models/connect';
import { MenuDataItem } from '../../typings';
import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import SideMenu from '@/components/SideMenu';
import Header from '../Header';
import Footer from '../Footer';
import defaultSettings from '@/defaultSettings';
import styles from './index.less';

const { Content } = Layout;

export interface BasicLayoutProps {
  menuData: MenuDataItem[];
  dispatch: Dispatch<any>;
  collapsed: boolean;
  // TODO: 项目路由
  route: { routes: object };
}

class BasicLayout extends React.PureComponent<BasicLayoutProps> {
  // React组件默认值写法
  static defaultProps: Partial<BasicLayoutProps> = {
    ...defaultSettings,
  };

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

  handleMenuCollapsed = (e: boolean) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/onSideMenuCollapsed',
      payload: e,
    });
  };

  render() {
    const { menuData, collapsed } = this.props;

    return (
      <Layout className={styles['basic-layout']}>
        <SideMenu menuData={menuData} collapsed={collapsed} />
        <Layout className={styles['main-layout']}>
          <Header
            collapsed={collapsed}
            handleMenuCollapsed={this.handleMenuCollapsed}
            {...this.props}
          />
          <Content className={styles['content-wrapper']}>{this.props.children}</Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default connect(({ global, menu }: ConnectState) => {
  return {
    collapsed: global.collapsed,
    menuData: menu.menuData,
  };
})((props: BasicLayoutProps) => <BasicLayout {...props} />);
