import React from 'react';
import {observer} from 'mobx-react'
import {observable,computed} from 'mobx' 
const appState=observable({
    count:0
})
appState.dec=function() {
    this.count++
}
appState.inc=function() {
    this.count--
}
@observer
class Count extends React.Component{
    render(){
        return(
            <div>
                <h1>count:{appState.count}</h1>
                <button onClick={this.handleDec}>-</button>
                <button onClick={this.handleInc}>+</button>
            </div>
        )
    }
    handleDec() {
        appState.dec()
    }
    handleInc(){
        appState.inc()
    }
}
export default Count


// function TodoList(){
//     const todoList=[{
//         finished:false,
//         title:'学习'
//     },{
//         finished:true,
//         title:'跑步'
//     }]
//     const TodoView=observer(({todo})=>(
//         <li>
//             <input type="checkbox" checked={todo.finished} onClick={()=>(todo.finished=!todo.finished)}/>
//             {todo.title}
//         </li>
//     ))
//     return(
//         <div>
//             {
//                 todoList.map(item=>{
//                     return (
//                         <ul>
//                             {<TodoView todo={item} key={item.title}/>}
//                         </ul>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default TodoList