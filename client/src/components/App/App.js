import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import Error from '../Error'

export default class App extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    error: PropTypes.string,
    children: PropTypes.node,
    getUser: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    resetError: PropTypes.func.isRequired
  }

  static defaultProps = {
    children: null
  }

  componentDidMount() {
    this.props.getUser()
  }

  _gotoHome = () => {
    this.props.push('/')
  }

  _logout = () => {
    this.props.logout()
    this.props.push('/')
  }

  render() {
    const {children, user, error, resetError} = this.props

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Slido"
            onTitleClick={this._gotoHome}
            iconElementRight={
              user.token ? (
                <FlatButton
                  label={`Hi ${user.fullName}, logout?`}
                  onClick={this._logout}
                />
              ) : (
                <FlatButton primary label="Login" href="/login" />
              )
            }
          />
          <div>{children}</div>
          {!!error && <Error error={error} reset={resetError} />}
        </div>
      </MuiThemeProvider>
    )
  }
}
