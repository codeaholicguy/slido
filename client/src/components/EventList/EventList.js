import React, {Component} from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List/List'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui/svg-icons/content/add'

import Event from './Event'

export default class EventList extends Component {
  static propTypes = {
    events: PropTypes.array,
    getEvents: PropTypes.func,
    push: PropTypes.func
  }

  componentDidMount() {
    this.props.getEvents()
  }

  _createEvent = () => {
    this.props.push('/createEvent')
  }

  render() {
    const {events, push} = this.props

    return (
      <List>
        <Subheader>
          <h2>My events</h2>
          <IconButton onClick={this._createEvent}>
            <AddIcon />
          </IconButton>
        </Subheader>
        {events.map(event => (
          <Event key={event.id} event={event} push={push} />
        ))}
      </List>
    )
  }
}
