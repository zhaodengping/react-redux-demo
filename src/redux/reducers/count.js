export default function count(state=0,actions){
    switch(actions.type){
        case "INCREMENT":{
            return state+1
        };
        case "DECREMENT":{
            return state-1
        };
        default:{
            return state
        }
    }
}