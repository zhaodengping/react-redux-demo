import React ,{useContext}from 'react';
import {observer} from 'mobx-react'
import {observable,computed} from 'mobx' 

const Context=React.createContext();

const appState=observable({
    count:1
})

const Timer=observer(()=>{
    const timeData =useContext(Context);
    return <span>点击了{appState.count}次</span>
})
const timeData=observable({
    
})


export default function ContextFather(){

    return(
        <Context.Provider value={timeData}>
            <Timer/>
        </Context.Provider>
    )
}