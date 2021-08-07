import { combineReducers } from 'redux'
import authReducer from './authReducer'
import managerReducer from './managerReducer'

export default combineReducers({
  auth: authReducer,
  manager: managerReducer,
})