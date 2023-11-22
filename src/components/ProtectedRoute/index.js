import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookies'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_Token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
