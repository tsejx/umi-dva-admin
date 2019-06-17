import React, { PureComponent } from 'react';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import {
  Card,
  Form,
  Input,
  Icon,
  Tooltip,
  Select,
  AutoComplete,
  Row,
  Col,
  Button,
  Checkbox,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { SelectValue } from 'antd/lib/select';
import PageWrapperWithHeader from '@/layouts/PageWrapperWithHeader';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

interface RegisterFormProps extends FormComponentProps {}

interface RegisterFormState {
  confirmDirty: boolean;
  autoCompleteResult: string[];
}

class RegisterForm extends PureComponent<RegisterFormProps, RegisterFormState> {
  public formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  public tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 7,
      },
    },
  };

  constructor(props: RegisterFormProps) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
    this.validateToNextPassword = this.validateToNextPassword.bind(this);
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur(e: any) {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  validateToNextPassword(rule: any, value: any, callback: any) {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  compareToFirstPassword(rule: any, value: any, callback: (param?: string) => void) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback(formatMessage({ id: 'form.basic.tooltip.password.inconsistent' }));
    } else {
      callback();
    }
  }

  handleWebsiteChange(value: SelectValue) {
    let autoCompleteResult: any[];
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    const { autoCompleteResult } = this.state;

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <PageWrapperWithHeader
        title={<FormattedMessage id="menu.form.basicform" />}
        description={formatMessage({ id: 'form.basic.description' })}>
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.email' })}>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: formatMessage({ id: 'form.basic.message.email.invalid' }),
                  },
                  {
                    required: true,
                    message: formatMessage({ id: 'form.basic.message.email.required' }),
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.password' })}
              hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'form.basic.message.password.required' }),
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password autoComplete="off" />)}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.password.confirm' })}
              hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'form.basic.message.password.confirm' }),
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password autoComplete="off" onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={
                <span>
                  {formatMessage({ id: 'form.basic.label.nickname' })}&nbsp;
                  <Tooltip title={formatMessage({ id: 'form.basic.tooltip.nickname' })}>
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }>
              {getFieldDecorator('nickname', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'form.basic.message.nickname.required' }),
                    whitespace: true,
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.phone' })}>
              {getFieldDecorator('phone', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'form.basic.message.phone.required' }),
                  },
                ],
              })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.website' })}>
              {getFieldDecorator('website', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'form.basic.message.website.required' }),
                  },
                ],
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                  placeholder={formatMessage({ id: 'form.basic.placeholder.website' })}>
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.captcha' })}
              extra={formatMessage({ id: 'form.basic.tooltip.captcha' })}>
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage({
                          id: 'form.basic.message.captcha.required',
                        }),
                      },
                    ],
                  })(<Input />)}
                </Col>
                <Col span={12}>
                  <Button>{formatMessage({ id: 'form.basic.label.captcha.button' })}</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item {...this.tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>
                  <FormattedMessage id="form.basic.agreement.prefix" />{' '}
                  <a href="">{formatMessage({ id: 'form.basic.agreement.clause' })}</a>
                </Checkbox>
              )}
            </Form.Item>
            <Form.Item {...this.tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                <FormattedMessage id="form.basic.label.register" />
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </PageWrapperWithHeader>
    );
  }
}

export default Form.create()(RegisterForm);
