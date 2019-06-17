import React from 'react';
import styles from './index.less'

interface GridContentProps {
  children: React.ReactNode;
}

const GridContent: React.SFC<GridContentProps> = ({ children }) => {
  const className = styles['grid-content'];
  return <div className={className}>{children}</div>;
};

export default GridContent;
