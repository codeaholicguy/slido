import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  orLabel: {
    marginLeft: 10,
    marginRight: 10
  }
}

export default class Home extends PureComponent {
  static propTypes = {
    push: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {eventCode: ''}
  }

  _changeEventCode = event => {
    this.setState({eventCode: event.target.value})
  }

  _goToEvent = () => {
    this.props.push(`/event/${this.state.eventCode}`)
  }

  _createEvent = () => {
    this.props.push('/createEvent')
  }

  render() {
    return (
      <Card>
        <CardTitle title="What do you want?" />
        <CardText>
          <TextField
            hintText="Enter event code"
            onChange={this._changeEventCode}
          />
          <RaisedButton primary label="Go" onClick={this._goToEvent} />
          <span style={styles.orLabel}>or</span>
          <RaisedButton
            secondary
            label="Create event"
            onClick={this._createEvent}
          />
          <br />
          <Link href="/user">View your events</Link>
        </CardText>
      </Card>
    )
  }
}
