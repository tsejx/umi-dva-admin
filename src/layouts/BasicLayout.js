import React from 'react'
import {connect} from 'dva'
import styles from './BasicLayout.less';
import {Layout, Icon} from 'antd'
import Footer from './Footer'
import SideBar from '../components/SideBar/index.js'

const {Header} = Layout;
class BasicLayout extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {

        return (
            <Layout className={styles['basic-layout']}>
                <SideBar collapsed={this.state.collapsed}/>
                <Layout>
                    <Header
                        style={{
                        background: '#fff',
                        padding: 0
                    }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed
                            ? 'menu-unfold'
                            : 'menu-fold'}
                            onClick={this.toggle}/>
                    </Header>
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                                {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout