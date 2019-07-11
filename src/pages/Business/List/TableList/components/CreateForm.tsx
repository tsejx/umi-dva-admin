import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import { Dispatch } from 'redux';
import { FormComponentProps } from 'antd/lib/form';
import { TableListItem } from '../data';
import { Form, Modal, DatePicker, Select, Input, Button } from 'antd';
import Result from '@/components/Result';
import styles from './CreateForm.less';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

interface CreateFormProps extends FormComponentProps {
  visible: boolean;
  dispatch: Dispatch<any>;
  onCancel: () => void;
}

interface CreateFormState {
  done: boolean;
}

class CreateForm extends React.Component<CreateFormProps, CreateFormState> {

  state = {
    done: false
  }

  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  }

  hideModal = () => {
    this.props.onCancel();
    this.setState({ done: false })
  }

  getModalContent = () => {
    const { getFieldDecorator } = this.props.form;

    if (this.state.done) {
      return (
        <Result
          type="success"
          title={formatMessage({ id: 'app.text.success.manipulation' })}
          className={styles.result}
          actions={
            <Button type="primary" onClick={this.hideModal}>
              {formatMessage({ id: 'app.text.confirm' })}
            </Button>
          }
        />
      );
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label={formatMessage({ id: 'list.iterator.create.name' })} {...this.formLayout}>
          {getFieldDecorator('title', {
            rules: [
              { required: true, message: formatMessage({ id: 'list.iterator.create.name.hint' }) },
            ],
          })(
            <Input placeholder={formatMessage({ id: 'list.iterator.create.target.placeholder' })} />
          )}
        </FormItem>
        <FormItem label={formatMessage({ id: 'list.iterator.create.time' })} {...this.formLayout}>
          {getFieldDecorator('createdAt', {
            rules: [{ required: true, message: '请选择开始时间' }],
            // initialValue: current.createdAt ? moment(current.createdAt) : null,
          })(<RangePicker format="YYYY-MM-DD" style={{ width: '100%' }} />)}
        </FormItem>
        <FormItem label={formatMessage({ id: 'list.iterator.create.owner' })} {...this.formLayout}>
          {getFieldDecorator('owner', {
            rules: [
              { required: true, message: formatMessage({ id: 'list.iterator.create.owner.hint' }) },
            ],
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
          })(
            <TextArea
              rows={4}
              placeholder={formatMessage({ id: 'list.iterator.create.target.placeholder' })}
            />
          )}
        </FormItem>
      </Form>
    );
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err: string | undefined, fieldsValue: TableListItem) => {
      if (err) return
      this.setState({ done: true })
      dispatch({
        type: 'list/createIterator',
        payload: {
          ...fieldsValue
        }
      })
    })
  };

  handleDone() {}

  render() {
    const { done } = this.state;
    const { visible } = this.props;

    const modalFooter = done
      ? { footer: null, onCancel: this.handleDone }
      : {
          okText: formatMessage({ id: 'app.manipulation.save' }),
          onOk: this.handleSubmit,
          onCancel: this.hideModal,
        };

    return (
      <Modal
        width={640}
        destroyOnClose
        visible={visible}
        title={formatMessage({ id: 'app.manipulation.edit' })}
        bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
        className={styles.modal}
        {...modalFooter}>
        {this.getModalContent()}
      </Modal>
    );
  }
}

export default Form.create()(CreateForm);
