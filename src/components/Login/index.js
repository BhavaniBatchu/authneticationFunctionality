import Cookies from 'js-cookies'
import {Redirect, withRouter} from 'react-router-dom'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_Token')
  const setCookiesAndNavigateToHome = token => {
    const {history} = props
    Cookies.set('jwt_Token', token, {
      expires: 30,
    })
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul02021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      setCookiesAndNavigateToHome(data.jwt_Token)
    }
  }
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with Sample Credit
      </button>
    </div>
  )
}

export default withRouter(Login)
