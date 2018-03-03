import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import Event from './Event'
import {getEvent, askQuestion, likeQuestion, dislikeQuestion} from './actions'

export default connect(({event}) => ({event}), {
  getEvent,
  askQuestion,
  likeQuestion,
  dislikeQuestion,
  push
})(Event)
