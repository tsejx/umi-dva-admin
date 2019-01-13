import React from 'react'
import {connect} from 'dva'
import {Layout} from 'antd'
import styles from './BasicLayout.less';
import Header from './Header'
import Footer from './Footer'
import SideBar from '@/components/SideBar'
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

    handleMenuCollapsed = () => {
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
                    menuData={menuData}
                    collapsed={this.state.collapsed}
                />
                <Layout>
                    <Header
                        collapsed={this.state.collapsed}
                        handleMenuCollapsed={this.handleMenuCollapsed}
                        {...this.props}
                    />
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