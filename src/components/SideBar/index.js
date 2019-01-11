import { Layout, Menu, Icon } from 'antd'
import styles from './index.less'
const { Sider } = Layout

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

export default SideBar