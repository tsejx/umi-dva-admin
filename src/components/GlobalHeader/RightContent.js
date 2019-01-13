import React, { PureComponent } from 'react';
import styles from './index.less';

class GlobalHeaderRight extends PureComponent {
  render() {
      const { onMenuClick } = this.props
    return (
      <div className={styles.right}>
        <span className={styles.logout} onClick={() => onMenuClick('logout')}>
          <svg className="icon uda-logout" aria-hidden="true">
            <use xlinkHref="#uda-logout" />
          </svg>
        </span>
      </div>
    );
  }
}

export default GlobalHeaderRight;
