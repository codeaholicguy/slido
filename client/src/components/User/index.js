import {connect} from 'react-redux'

import User from './User'

export default connect(({user, routing}) => ({user, routing}), {})(User)
