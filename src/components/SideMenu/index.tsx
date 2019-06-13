import { MenuDataItem } from '@/typings';
import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'umi/link';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

export interface SideMenuProps {
  menuData: MenuDataItem[];
  collapsed: boolean;
  title?: string;
  siderWidth?: number;
}

interface SideMenuState {}

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: 'https://',
});

class SideMenu extends Component<SideMenuProps, SideMenuState> {
  public static defaultProps: Partial<SideMenuProps> = {
    title: 'UmiDvaAdmin',
    siderWidth: 256,
  };

  private brand: React.ReactNode;

  constructor(props: SideMenuProps) {
    super(props);
    this.renderBrandAndLogo = this.renderBrandAndLogo.bind(this);
  }

  // componentDidMount(): void {}

  // getSelectedMenuKeys(pathname: string) {}

  getMenuItemIcon = (icon?: string | React.ReactNode): React.ReactNode => {
    if (typeof icon === 'string') {
      if (icon.startsWith('icon-')) {
        return <IconFont type={icon} />;
      }

      return <Icon type={icon} />;
    }
    return icon;
  };

  renderBrandAndLogo() {
    if (!this.brand) {
      this.brand = (
        <div id="logo" className={styles.logo}>
          <a />
        </div>
      );
    }

    return this.brand;
  }

  renderMenuItems: (menuData: MenuDataItem[]) => MenuDataItem = (menuData) => {
    return menuData
      .filter(item => item.name)
      .map(item => this.renderSubMenuOrItem(item))
      .filter(item => item);
  }

  renderSubMenuOrItem: (item: MenuDataItem) => React.ReactNode = (item) => {
    if (Array.isArray(item.children) && item.children.some(child => !!child.name)) {
      const { name } = item;

      return (
        <SubMenu
          key={item.path}
          title={
            item.icon ? (
              <span>
                {this.getMenuItemIcon(item.icon)}
                <span>{name}</span>
              </span>
            ) : (
              name
            )
          }
        >
          {this.renderMenuItems(item.children)}
        </SubMenu>
      );
    }

    return <Menu.Item key={item.path}>{this.renderMenuItemPath(item)}</Menu.Item>;
  };

  renderMenuItemPath(item: MenuDataItem): React.ReactNode {
    const icon = this.getMenuItemIcon(item.icon);
    const { name } = item;
    return (
      <Link to={item.path || '/'}>
        {icon}
        <span>{name}</span>
      </Link>
    );
  }

  render(): React.ReactNode {
    const {
      menuData,
      collapsed,
      siderWidth,
    } = this.props;

    const siderClassName = classNames(styles.sider);

    return (
      <Sider
        collapsible
        trigger={null}
        className={siderClassName}
        collapsed={collapsed}
        breakpoint="lg"
        width={siderWidth}
      >
        {this.renderBrandAndLogo()}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {this.renderMenuItems(menuData)}
        </Menu>
      </Sider>
    );
  }
}

export default SideMenu;
