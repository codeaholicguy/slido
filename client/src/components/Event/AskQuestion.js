import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Formsy from 'formsy-react'
import RaisedButton from 'material-ui/RaisedButton'

import TextInput from '../TextInput'

export default class AskQuestion extends Component {
  static propTypes = {
    askQuestion: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      canSubmit: false
    }
  }

  _submit = data => {
    this.props.askQuestion(data)
  }

  _enableButton = () => {
    this.setState({canSubmit: true})
  }

  _disableButton = () => {
    this.setState({canSubmit: false})
  }

  render() {
    return (
      <Formsy
        onSubmit={this._submit}
        onValid={this._enableButton}
        onInvalid={this._disableButton}
      >
        <TextInput
          hintText="Type your question"
          name="content"
          type="text"
          fullWidth
          required
        />
        <RaisedButton
          primary
          type="submit"
          label="Send"
          disabled={!this.state.canSubmit}
        />
      </Formsy>
    )
  }
}
