import React from 'react';
import { Icon } from 'antd';
import RightContent from './RightContent';
import styles from './index.less';
// const styles = require('./index.less');

interface GlobalHeaderProps {
  collapsed: boolean;
  onCollapse: (e: boolean) => void;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ collapsed, onCollapse, ...restProps }) => (
  <div className={styles.header}>
    <span className={styles.trigger} onClick={() => onCollapse(!collapsed)}>
      <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
    </span>
    <RightContent {...restProps} />
  </div>
);

export default GlobalHeader;
