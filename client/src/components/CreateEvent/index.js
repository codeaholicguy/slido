import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import CreateEvent from './CreateEvent'
import {createEvent} from './actions'

export default connect(() => ({}), {createEvent, push})(CreateEvent)
