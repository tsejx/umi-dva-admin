import React from 'react'
import {connect} from 'dva'
import {Layout, Icon} from 'antd'
import styles from './BasicLayout.less';
import Footer from './Footer'
import SideBar from '@/components/SideBar'

const {Header} = Layout;
class BasicLayout extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    componentDidMount(){
        const {
            dispatch,
            route: { routes }
        } = this.props;

        dispatch({
            type: 'Menu/getMenuData',
            payload: {
                routes
            }
        })
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {

        const {
            menuData
        } = this.props

        return (
            <Layout className={styles['basic-layout']}>
                <SideBar
                    collapsed={this.state.collapsed}
                    menuData={menuData}
                />
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

export default connect(({Menu}) => ({
    menuData: Menu.menuData
}))(props => (
    <BasicLayout {...props}/>
))