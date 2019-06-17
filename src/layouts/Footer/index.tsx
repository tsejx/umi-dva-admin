import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '../GlobalFooter';

const { Footer } = Layout;

const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Github',
          title: <Icon type="github" />,
          href: 'https://github.com/tsejx/umi-dva-admin',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> umi-dva-admin created by tsejx@github
        </Fragment>
      }
    />
  </Footer>
);

export default FooterView;
