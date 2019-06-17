import React, { PureComponent } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import {
  Card,
  Form,
  Select,
  InputNumber,
  Radio,
  Checkbox,
  Row,
  Col,
  Button,
  Upload,
  Icon,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { UploadChangeParam } from 'antd/lib/upload';
import PageWrapper from '@/layouts/PageWrapper';

const { Option } = Select;

interface DemostractionFormProps extends FormComponentProps {}

interface DemostractionFormState {}

class DemostractionForm extends PureComponent<DemostractionFormProps, DemostractionFormState> {
  public selectComp: React.ReactNode;
  public selectMutiComp: React.ReactNode;
  public radioGroupComp: React.ReactNode;
  public checkboxComp: React.ReactNode;

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
        offset: 8,
      },
    },
  };

  constructor(props: DemostractionFormProps) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.renderSelectMutiple = this.renderSelectMutiple.bind(this);
    this.renderRadioGroup = this.renderRadioGroup.bind(this);
    this.renderCheckbox = this.renderCheckbox.bind(this);
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  renderSelect() {
    if (!this.selectComp) {
      this.selectComp = (
        <Select placeholder={formatMessage({ id: 'form.basic.placeholder.select' })}>
          {[
            {
              value: 'china',
              title: 'China',
            },
            {
              value: 'usa',
              title: 'U.S.A',
            },
          ].map(item => {
            return (
              <Option key={item.value} value={item.value}>
                {item.title}
              </Option>
            );
          })}
        </Select>
      );
    }

    return this.selectComp;
  }

  renderSelectMutiple() {
    if (!this.selectMutiComp) {
      this.selectMutiComp = (
        <Select
          mode="multiple"
          placeholder={formatMessage({ id: 'form.basic.placeholder.select.mutiple' })}>
          {[
            {
              value: 'red',
              title: 'Red',
            },
            {
              value: 'green',
              title: 'Green',
            },
            {
              value: 'blue',
              title: 'Blue',
            },
          ].map(item => {
            return (
              <Option key={item.value} value={item.value}>
                {item.title}
              </Option>
            );
          })}
        </Select>
      );
    }

    return this.selectMutiComp;
  }

  renderRadioGroup() {
    if (!this.radioGroupComp) {
      this.radioGroupComp = (
        <Radio.Group>
          {[
            {
              value: 'a',
              title: '选项A',
            },
            {
              value: 'b',
              title: '选项B',
            },
            {
              value: 'c',
              title: '选项C',
            },
          ].map(item => {
            return (
              <Radio key={item.value} value={item.value}>
                {item.title}
              </Radio>
            );
          })}
        </Radio.Group>
      );
    }

    return this.radioGroupComp;
  }

  renderCheckbox() {
    if (!this.checkboxComp) {
      this.checkboxComp = (
        <Checkbox.Group style={{ width: '100%' }}>
          <Row>
            {[
              {
                value: 'a',
                title: '选项A',
              },
              {
                value: 'b',
                title: '选项B',
                disabled: true,
              },
              {
                value: 'c',
                title: '选项C',
              },
              {
                value: 'd',
                title: '选项D',
              },
              {
                value: 'e',
                title: '选项E',
              },
            ].map(item => {
              return (
                <Col span={4} key={item.value}>
                  <Checkbox disabled={item.disabled} value={item.value}>
                    {item.title}
                  </Checkbox>
                </Col>
              );
            })}
          </Row>
        </Checkbox.Group>
      );
    }

    return this.checkboxComp;
  }

  normalizeFile = (e: UploadChangeParam) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <PageWrapper>
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.plain.text' })}>
              <span className="ant-form-text">{formatMessage({ id: 'menu.form.basicform' })}</span>
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.select' })}
              hasFeedback>
              {getFieldDecorator('select', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'form.basic.message.select.required' }),
                  },
                ],
              })(this.renderSelect())}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.select.mutiple' })}>
              {getFieldDecorator('select-multiple', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'form.basic.message.select.mutiple.required' }),
                    type: 'array',
                  },
                ],
              })(this.renderSelectMutiple())}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.intput.number' })}>
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text">
                {' '}
                {formatMessage({ id: 'form.basic.extra.input.number' })}
              </span>
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.radio.group' })}>
              {getFieldDecorator('radio-group')(this.renderRadioGroup())}
            </Form.Item>
            <Form.Item {...this.formItemLayout} label={formatMessage({ id: 'form.basic.label.checkbox'})}>
              {getFieldDecorator('checkbox-group', {
                initialValue: ['A', 'B'],
              })(this.renderCheckbox())}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.upload' })}
              extra={formatMessage({ id: 'form.basic.extra.upload.recommend' })}>
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normalizeFile,
              })(
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button>
                    <Icon type="upload" /> {formatMessage({ id: 'form.basic.extra.upload.help' })}
                  </Button>
                </Upload>
              )}
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label={formatMessage({ id: 'form.basic.label.dragger' })}>
              <div className="dropbox">
                {getFieldDecorator('dragger', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normalizeFile,
                })(
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      {formatMessage({ id: 'form.basic.extra.dragger.help' })}
                    </p>
                    <p className="ant-upload-hint">
                      {formatMessage({ id: 'form.basic.extra.dragger.tip' })}
                    </p>
                  </Upload.Dragger>
                )}
              </div>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 7 }}>
              <Button type="primary" htmlType="submit">
                {formatMessage({ id: 'form.basic.label.submit' })}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </PageWrapper>
    );
  }
}

export default Form.create()(DemostractionForm);
