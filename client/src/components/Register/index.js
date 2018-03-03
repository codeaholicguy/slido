import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import Register from './Register'
import {register} from './actions'

export default connect(() => ({}), {push, register})(Register)
