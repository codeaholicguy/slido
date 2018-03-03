import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Formsy from 'formsy-react'
import {Link} from 'react-router'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

import TextInput from '../TextInput'

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      canSubmit: false
    }
  }

  _submit = async data => {
    await this.props.login(data)

    this.props.push('/')
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
        <CardTitle title="Login" />
        <CardText>
          <Formsy
            onSubmit={this._submit}
            onValid={this._enableButton}
            onInvalid={this._disableButton}
          >
            <TextInput
              floatingLabelText="Email"
              name="email"
              type="text"
              fullWidth
              validations="isEmail"
              validationError="This is not a valid email"
              required
            />
            <TextInput
              floatingLabelText="Password"
              name="password"
              type="password"
              fullWidth
              required
            />
            <RaisedButton
              type="submit"
              label="Login"
              disabled={!this.state.canSubmit}
            />
          </Formsy>
          <Link href="/register">Register</Link>
        </CardText>
      </Card>
    )
  }
}
