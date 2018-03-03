import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import EventList from '../EventList'

export default class User extends PureComponent {
  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const {token} = this.props.user
    return <div>{token && <EventList />}</div>
  }
}
