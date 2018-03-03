import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import ListItem from 'material-ui/List/ListItem'

import {format} from '../../core/utils/date'

export default class Event extends PureComponent {
  static propTypes = {
    event: PropTypes.object,
    push: PropTypes.func
  }

  _goToEvent = () => {
    this.props.push(`/event/${this.props.event.code}`)
  }

  render() {
    const {code, name, startsAt, endsAt} = this.props.event

    return (
      <ListItem
        primaryText={`${name} (#${code})`}
        secondaryText={
          <p>
            {format(startsAt)} - {format(endsAt)}
          </p>
        }
        secondaryTextLines={2}
        onClick={this._goToEvent}
      />
    )
  }
}
