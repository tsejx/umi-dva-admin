import React from 'react'
import Link from 'umi/link'
import styles from './LoginLayout.less'
import logo from '../assets/logo.svg'

class LoginLayout extends React.Component {
  constructor(props) {
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
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Umi Dva Admin</span>
              </Link>
            </div>
            <div className={styles.desc}>致力于做最好的 Ant Design Pro 高仿项目</div>
          </div>
          {this.props.children}
        </div>
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
