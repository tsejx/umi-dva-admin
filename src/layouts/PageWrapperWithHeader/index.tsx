import React from 'react';
import { PageHeader, Typography } from 'antd';
import RouteContext from '../RouteContext';
import GridContent from '../GridContent';
import styles from './index.less';

export interface PageWrapperWithHeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const PageWrapperWithHeader: React.SFC<PageWrapperWithHeaderProps> = ({
  title,
  children,
  description,
  ...restProps
}) => {
  return (
    <RouteContext.Consumer>
      {value => (
        <>
          <PageHeader
            {...value}
            title={
              <Typography.Title level={4} style={{ margin: 0 }}>
                {title}
              </Typography.Title>
            }
            {...restProps}>
            <div>{description}</div>
          </PageHeader>
          {children ? (
            <div className={styles.content}>
              <GridContent>
                <div>{children}</div>
              </GridContent>
            </div>
          ) : null}
        </>
      )}
    </RouteContext.Consumer>
  );
};

export default PageWrapperWithHeader;
