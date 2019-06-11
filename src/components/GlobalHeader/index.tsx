import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';
import RightContent from './RightContent'

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  };
  render() {
    const { collapsed } = this.props;
    return (
      <div className={styles.header}>
        <span className={styles.trigger} onClick={this.toggle}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>
        <RightContent {...this.props}/>
      </div>
    );
  }
}

export default GlobalHeader;
