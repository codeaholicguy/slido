import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'

export default class Error extends PureComponent {
  static propTypes = {
    error: PropTypes.string,
    reset: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    setTimeout(props.reset, 5000)

    this.state = {open: !!props.error}
  }

  componentWillReceiveProps(nextProps) {
    const {error} = nextProps
    if (error !== '') {
      setTimeout(nextProps.reset, 5000)
      this.setState({open: true})
    }
  }

  _close = () => {
    this.props.reset()
    this.setState({open: false})
  }

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message={this.props.error}
        onRequestClose={this._close}
      />
    )
  }
}
