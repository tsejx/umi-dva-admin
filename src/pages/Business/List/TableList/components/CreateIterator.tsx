import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import { Form, Modal, DatePicker, Select, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

interface CreateIteratorProps extends FormComponentProps {
  visible: boolean;
  onCancel: () => void;
}

interface CreateIteratorState {
  done: boolean;
}

class CreateIterator extends React.Component<CreateIteratorProps, CreateIteratorState> {

  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  };

  constructor(props: CreateIteratorProps) {
    super(props);
    this.state = {
      done: false,
    }

    this.getModalContent = this.getModalContent.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.props.onCancel()
  };

  getModalContent() {
    const { getFieldDecorator } = this.props.form;

    if (this.state.done) {
      return <div>H</div>;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label={formatMessage({ id: 'list.iterator.create.name' })} {...this.formLayout}>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: formatMessage({ id: 'list.iterator.create.name.hint' }) }],
            // initialValue: current.title,
          })(<Input placeholder={formatMessage({ id: 'list.iterator.create.target.placeholder' })} />)}
        </FormItem>
        <FormItem label={formatMessage({ id: 'list.iterator.create.time.hint' })} {...this.formLayout}>
          {getFieldDecorator('createdAt', {
            rules: [{ required: true, message: '请选择开始时间' }],
            // initialValue: current.createdAt ? moment(current.createdAt) : null,
          })(
            <DatePicker
              showTime
              placeholder="请选择"
              format="YYYY-MM-DD HH:mm:ss"
              style={{ width: '100%' }}
            />
          )}
        </FormItem>
        <FormItem label={formatMessage({ id: 'list.iterator.create.owner' })} {...this.formLayout}>
          {getFieldDecorator('owner', {
            rules: [{ required: true, message: formatMessage({ id: 'list.iterator.create.owner.hint' }) }],
            // initialValue: current.owner,
          })(
            <Select placeholder="请选择">
              <Option value="成员A">成员A</Option>
              <Option value="成员B">成员B</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...this.formLayout} label={formatMessage({ id: 'list.iterator.create.target' })}>
          {getFieldDecorator('subDescription', {
            rules: [{ message: formatMessage({ id: 'list.iterator.create.target.hint' }), min: 5 }],
            // initialValue: current.subDescription,
          })(<TextArea rows={4} placeholder={formatMessage({ id: 'list.iterator.create.target.placeholder' })} />)}
        </FormItem>
      </Form>
    );
  }

  handleSubmit = () => {};

  handleDone() {}

  render() {

    const { done } = this.state;

    const modalFooter = done
      ? { footer: null, onCancel: this.handleDone }
      : {
          okText: formatMessage({ id: 'app.manipulation.save' }),
          onOk: this.handleSubmit,
          onCancel: this.hideModal,
        };

    return (
      <Modal
        visible
        destroyOnClose
        width={640}
        title={formatMessage({ id: 'app.manipulation.edit' })}
        bodyStyle={done ? { padding: '720px 0' } : { padding: '28px 0 0' }}
        {...modalFooter}
      >
        {this.getModalContent()}
      </Modal>
    );
  }
}

export default Form.create()(CreateIterator)
