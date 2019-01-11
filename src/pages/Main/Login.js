import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Form, Input, Icon, Button, Checkbox } from 'antd';
import styles from './Login.less';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
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
              rules: [{ required: true, message: 'Please input your Password!' }],
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
            })(<Checkbox>下次自动登录</Checkbox>)}
            <a className={styles['login-form-forgot']} href="">
              忘记密码
            </a>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className={styles['login-form-button']}
            >
              登录
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(connect(Login => Login)(LoginPage));
