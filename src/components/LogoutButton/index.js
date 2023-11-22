import {WithRouter} from 'react-router-dom'
import Cookies from 'js-cookies'
import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_Token')
    history.replace('/login')
  }
  return (
    <button type="button" className="LogoutButton" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default WithRouter(LogoutButton)
