import React from 'react';
import classNames from 'classnames';
import { Icon } from 'antd';
import styles from './index.less';

interface IResultProps {
  type: 'success' | 'error';
  title: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Result: React.SFC<IResultProps> = ({
  className,
  type,
  title,
  description,
  extra,
  actions,
  ...restProps
}) => {
  const iconMap = {
    error: <Icon className={styles.error} type="close-circle" theme="filled" />,
    success: <Icon className={styles.success} type="check-circle" theme="filled" />,
  };

  const cls = classNames(styles.result, className);

  return (
    <div className={cls} {...restProps}>
      <div className={styles.icon}>{iconMap[type]}</div>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
      {extra && <div className={styles.extra}>{extra}</div>}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
};

export default Result;
