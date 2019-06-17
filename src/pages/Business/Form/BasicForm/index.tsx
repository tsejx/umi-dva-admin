import React, { PureComponent } from 'react';
import RegisterForm from './components/RegisterForm';
import DemostractionFrom from './components/DemostractionFrom';

interface BasicFormProps {}

interface BasicFormState {}

class BasicForm extends PureComponent<BasicFormProps, BasicFormState> {
  render() {
    return (
      <>
        <RegisterForm />
        <DemostractionFrom />
      </>
    );
  }
}

export default BasicForm;
