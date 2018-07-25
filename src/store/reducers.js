import C from '../constants'
import { combineReducers } from 'redux'

export const users = (state=null, action) => {
    if (action.type === C.ADD_USER) {
        return [state, action.payload]
    } else {
        return state
    }
}

export const notes = (state=null, action) => {
    if(action.type === C.ADD_NOTES){
        return [state, action.payload]
    }else{
        return state
    }
}

export default combineReducers({
    users,
    notes
})