import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.less';
import classNames from 'classnames';
import { MenuDataItem } from '@/typings';

const { Sider } = Layout;
const { SubMenu } = Menu;

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: 'https://'
})

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.renderBrandAndLogo = this.renderBrandAndLogo.bind(this);
  }

  componentDidMount(): void {}

  getMenuItemIcon = (icon?: string | React.ReactNode): React.ReactNode => {
    if (typeof icon === 'string') {
        if (icon.startsWith('icon-')){
            return <IconFont type={icon}/>
        }

        return (
            <Icon type={icon} />
        )
    }
    return icon;
  }

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

  renderMenuItems(menuData){
    return (
        menuData
            .filter(item => item.name)
            .map(item => this.renderSubMenuOrItem(item))
            .filter(item => item)
    )
  }

  renderSubMenuOrItem = (item): React.ReactNode => {

    if (Array.isArray(item.children) && item.children.some(child => !!child.name)){
        // 国际化
        // const name = this.getInitalName(item)
        const { name } = item

        return (
            <SubMenu
                key={item.path}
                title={
                    item.icon
                    ? (
                        <span>
                            {this.getMenuItemIcon(item.icon)}
                            <span>{name}</span>
                        </span>
                    )
                    : name
                }
            >
                {this.renderMenuItems(item.children)}
            </SubMenu>
        )

    }

    // <Menu.Item key="1">
    //     <Icon type="user" />
    //     <span>BasicForm</span>
    // </Menu.Item>

    return (
        <Menu.Item key={item.path}>{this.renderMenuItemPath(item)}</Menu.Item>
    )
  }

  renderMenuItemPath(item): React.ReactNode {
    const icon = this.getMenuItemIcon(item.icon);
    // const name = this.getInitialName(item.name);
    const { name } = item
    return (
        <>
            {icon}
            <span>{name}</span>
        </>
    )
  }

  render() {
    const { menuData, collapsed, siderWidth = 256 } = this.props;

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

SideMenu.defaultProps = {
  title: 'UDA',
};

export default SideMenu;
