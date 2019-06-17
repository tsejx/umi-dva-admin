import React, { Component } from 'react';
import Link from 'umi/link';
import styles from './index.less';
import logo from '@/assets/logo.svg';

interface LoginLayoutProps {
  children: React.ReactNode
}

class LoginLayout extends Component<LoginLayoutProps> {
  constructor(props: LoginLayoutProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.lang} />
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="//github.com/tsejx/umi-dva-admin">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Umi Dva Admin</span>
              </Link>
            </div>
            <div className={styles.desc}>致力于做最好的 Ant Design Pro 高仿项目</div>
          </div>
          {this.props.children}
        </div>
        {/* TODO: 需要优化 */}
        <ul className={styles.bubble}>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}

export default LoginLayout;
