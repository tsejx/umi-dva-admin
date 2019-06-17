import React, { Component } from 'react';
import styles from './index.less';
import { ClickParam } from 'antd/lib/menu';

interface GlobalHeaderRightProps {
  // onMenuClick?: (param: ClickParam) => void
  onMenuClick?: () => void
}

export default class GlobalHeaderRight extends Component<GlobalHeaderRightProps> {
  render() {
    const { onMenuClick } = this.props;
    return (
      <div className={styles.right}>
        <span className={styles.logout} onClick={onMenuClick}>
          <svg className="icon uda-logout" aria-hidden="true">
            <use xlinkHref="#uda-logout" />
          </svg>
        </span>
      </div>
    );
  }
}
