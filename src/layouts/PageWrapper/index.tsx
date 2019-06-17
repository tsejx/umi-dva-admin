import React from 'react';
import GridContent from '../GridContent';
import styles from './index.less';

export interface PageWrapper {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const PageWrapper: React.SFC<PageWrapper> = ({ children }) => {
  return (
    <>
      {children ? (
        <div className={styles.content}>
          <GridContent>
            <div>{children}</div>
          </GridContent>
        </div>
      ) : null}
    </>
  );
};

export default PageWrapper;
