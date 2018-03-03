import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import Login from './Login'
import {login} from './actions'

export default connect(() => ({}), {login, push})(Login)
