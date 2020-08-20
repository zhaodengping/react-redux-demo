import React from 'react';
import {observer} from 'mobx-react'
import {observable,computed} from 'mobx' 


const appState=observable({
    count:0
})
appState.dec=function() {
    this.count--
}
appState.inc=function() {
    this.count++
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