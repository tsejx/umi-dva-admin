import React from 'react'
import {connect} from 'dva'
import styles from './index.less';
import {Layout, Menu, Icon} from 'antd'
const {Header, Footer, Sider} = Layout;

const SideBar = (props) => {
    return (
        <Sider
            collapsible
            trigger={null}
            className={styles.sider}
            collapsed={props.collapsed}
        >
            <div className={styles.logo}/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="user"/>
                    <span>BasicForm</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera"/>
                    <span>StepForm</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload"/>
                    <span>AdvancedForm</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

class Container extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Layout>
                <Header
                    style={{
                    background: '#fff',
                    padding: 0
                }}>
                    <Icon
                        className={styles.trigger}
                        type={this.props.collapsed
                        ? 'menu-unfold'
                        : 'menu-fold'}
                        onClick={this.props.toggle}/>
                </Header>
                <div className={styles.content}>
                    <div className={styles.wrapper}>

                    </div>
                </div>
                <Footer style={{
                    textAlign: 'center'
                }}>
                    umi-dva-admin ©2018 Created by tsejx
                </Footer>
            </Layout>
        )
    }
}
class BasicLayout extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            hey: false
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {

        console.log('HERE!')

        return (
            <Layout className={styles['basic-layout']}>
                <SideBar collapsed={this.state.collapsed}/>
                <Container collapsed={this.state.collapsed} toggle={this.toggle}>
                    { this.props.children }
                </Container>
            </Layout>
        )
    }
}

export default BasicLayout