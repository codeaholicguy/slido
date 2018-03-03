import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Formsy from 'formsy-react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

import TextInput from '../TextInput'

export default class CreateEvent extends Component {
  static propTypes = {
    createEvent: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      canSubmit: false
    }
  }

  _submit = async data => {
    await this.props.createEvent(data)

    this.props.push('/user')
  }

  _enableButton = () => {
    this.setState({canSubmit: true})
  }

  _disableButton = () => {
    this.setState({canSubmit: false})
  }

  render() {
    return (
      <Card>
        <CardTitle title="Create event" />
        <CardText>
          <Formsy
            onSubmit={this._submit}
            onValid={this._enableButton}
            onInvalid={this._disableButton}
          >
            <TextInput
              floatingLabelText="Event code"
              name="code"
              type="text"
              required
              fullWidth
            />
            <TextInput
              floatingLabelText="Event name"
              name="name"
              type="text"
              required
              fullWidth
            />
            <TextInput
              floatingLabelText="Starts at"
              name="startsAt"
              type="text"
              required
              fullWidth
            />
            <TextInput
              floatingLabelText="Ends at"
              name="endsAt"
              type="text"
              required
              fullWidth
            />
            <RaisedButton
              primary
              type="submit"
              label="Create"
              disabled={!this.state.canSubmit}
            />
          </Formsy>
        </CardText>
      </Card>
    )
  }
}
