import  React,{useState,useEffect} from 'react';
import { observable } from 'mobx';
import {observer}from 'mobx-react'

// const Timer=observer(()=>{
//     const [timeData]=useState(()=>
//         observable([{
//             name:"alice",
//             age:12,
//             hobby:[{
//                 text:'sing',
//             },{
//                 text:'paint'
//             }]
//         }])
//     );

//     useEffect(() => {
//         timeData[0].hobby[0].text='hhhh'
//     }, []);
//     return <span>{timeData[0].hobby[0].text}</span>
// })

@observer
class Timer extends React.Component{
    @observable timeShow=0;
    componentWillMount(){
        setInterval(()=>{
            this.timeShow++
        },1000)
    }
    render(){
        return <span>{this.timeShow}</span>
    }
}

export default Timer;