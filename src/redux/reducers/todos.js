export default function todo(state=[],actions){
    switch(actions.type){
        case "ADD_TODO":{
            return state.concat(actions.text)
        };
        default:{
            return state
        }
    }
}