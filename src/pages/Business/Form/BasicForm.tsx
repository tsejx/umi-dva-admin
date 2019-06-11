import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'

class BasicForm extends Component {
   constructor(props) {
       super(props)
       this.state = {

       }
  }
  render() {

    const { form } = this.props;

    console.dir(form);

    return (
      <div>
        BasicForm
      </div>
    )
  }
}

BasicForm.propTypes = {
}

export default Form.create()(BasicForm)
