import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import EventList from './EventList'
import {getEvents} from './actions'

export default connect(({events}) => ({events}), {getEvents, push})(EventList)
