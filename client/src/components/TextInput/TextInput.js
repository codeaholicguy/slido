import React, {Component} from 'react'
import {propTypes} from 'formsy-react'
import TextField from 'material-ui/TextField'

export default class TextInput extends Component {
  static propTypes = {
    ...propTypes
  }

  _changeValue = event => {
    this.props.setValue(event.target.value)
  }

  render() {
    const {
      getValue,
      getErrorMessage,
      getErrorMessages,
      hasValue,
      isFormDisabled,
      isValid,
      isPristine,
      isFormSubmitted,
      isRequired,
      isValidValue,
      resetValue,
      setValidations,
      setValue,
      showRequired,
      showError,
      validationError,
      validationErrors,
      innerRef,
      ...rest
    } = this.props
    const errorMessage = getErrorMessage()
    const value = getValue()

    return (
      <TextField
        {...rest}
        value={value}
        errorText={errorMessage}
        onChange={this._changeValue}
      />
    )
  }
}
