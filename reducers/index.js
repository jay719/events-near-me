import { ActionSheetIOS } from 'react-native'
import {combineReducers} from 'redux'

const events = (state=[], action) =>{
    switch(action.type){
        case"SET_EVENTS":       //anything from case is going to be what next state is
            return action.events  //events key attached to action and save it to state. If existing events couldve been (...state,...action.events)
        default:
            return state
    }
}

export default combineReducers({
    events,           // events: events    
})
