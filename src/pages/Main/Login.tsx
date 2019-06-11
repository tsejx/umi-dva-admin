import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import { Form, Input, Icon, Button, Checkbox, Tabs, Tooltip, message } from 'antd';
import styles from './Login.less';
const { TabPane } = Tabs;
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'account',
      autoLogin: true,
    };
  }

  onTabChange = type => {
    this.setState({ type });
  };

  onAutoLoginChange = () => {};

  onGetCaptcha = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(['userName', 'password'], (err, values) => {
      const { type } = this.state;

      if (!err) {
        console.log('Received values of form: ', values);
      }

      if (values.userName !== 'admin') {
        message.warning('用户名错误');
        return;
      }
      if (values.password !== '888888') {
        message.warning('密码错误')
        return;
      }

      this.props.dispatch({
        type: 'Login/login',
        payload: {
          ...values,
          type,
        },
      });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoLogin, type } = this.state;
    return (
      <div className={styles.main}>
        <Tabs defaultActiveKey="account" onChange={this.onTabChange} animated={true}>
          <TabPane tab="账户密码登录" key="account">
            <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入你的用户名!' }],
                })(
                  <Input
                    size="large"
                    placeholder="用户名"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入你的密码!' }],
                })(
                  <Input
                    size="large"
                    type="password"
                    placeholder="密码"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox value={autoLogin} onChange={this.onAutoLoginChange}>
                    自动登录
                  </Checkbox>
                )}
                <Tooltip
                  placement="top"
                  title={
                    <div>
                      <div>账户名：admin</div>
                      <div>密码：888888</div>
                    </div>
                  }
                >
                  <a className={styles['login-form-forgot']}>
                    忘记密码
                  </a>
                </Tooltip>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className={styles['login-form-button']}
                  onClick={() => {}}
                >
                  登录
                </Button>
                {/* TODO: 注册账户 */}
                {/* Or <a href="">register now!</a> */}
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="手机号码登录" key="mobile">
            <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
              <Form.Item>
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: '请输入你的手机号!' }],
                })(
                  <Input
                    size="large"
                    placeholder="手机号"
                    prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: '请输入你的验证码!' }],
                })(
                  <Input
                    size="large"
                    placeholder="验证码"
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox value={autoLogin} onChange={this.onAutoLoginChange}>
                    自动登录
                  </Checkbox>
                )}
                <a className={styles['login-form-forgot']} href="">
                  忘记密码
                </a>

                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className={styles['login-form-button']}
                  onClick={() => {}}
                >
                  登录
                </Button>
                {/* TODO: 注册账户 */}
                {/* Or <a href="">register now!</a> */}
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Form.create()(connect(Login => Login)(LoginPage));
