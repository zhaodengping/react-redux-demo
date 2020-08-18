import {combineReducers} from 'redux'
import count from './reducers/count'
import todo from './reducers/todos'

// export function todo(state=[],actions){
//     switch(actions.type){
//         case "ADD_TODO":
//             return state.concat(actions.text)
//         default:
//             return state
//     }
// }

export default combineReducers({
    count,
    todo
})