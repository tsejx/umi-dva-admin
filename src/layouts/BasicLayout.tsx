import { ConnectState } from '@/models/connect';
import { MenuDataItem } from '../typings'
import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import SideMenu from '@/components/SideMenu';
import Header from './Header';
import Footer from './Footer';
import defaultSettings from '../defaultSettings';
import styles from './BasicLayout.less';

export interface BasicLayoutProps {
  menuData: MenuDataItem[];
}

class BasicLayout extends React.PureComponent {

  public static defaultProps: Partial<BasicLayoutProps> = {
    ...defaultSettings,
  }

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

export default connect(({ global, menu }: ConnectState) => {
  return {
    collapsed: global.collapsed,
    menuData: menu.menuData,
  };
})((props: BasicLayoutProps) => <BasicLayout {...props} />);
