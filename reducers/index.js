import { ActionSheetIOS } from 'react-native'
import {combineReducers} from 'redux'
//store runs this in order to change state
const events = (state=[], action) =>{
    switch(action.type){
        case"SET_EVENTS":       //anything from case is going to be what next state is, can have multiple cases(IF statement)
            return action.events  //events key attached to action and save it to state. If existing events couldve been (...state,...action.events)
        default:
            return state
    }
}
const eventLink = (state=["/discovery/v2/events/G5vzZ4g6yzQHe?locale=en-us"], action) => {
    switch(action.type){
        case"SET_LINKS":
            return [...state, action.link]
        case "VIEW_LINKS":
            return [action.event]
        default:
            return state
    }
}

// const favorites = (state=[], action) => {
//     switch(action.type){
//         case"SET_EVENTS":       
//             return action.events  
//         default:
//             return state
// }

export default combineReducers({ //will combine state if i add more then events,
    events, 
    eventLink        // events(state): events(reduceer up top), gives STATE of events 
})
