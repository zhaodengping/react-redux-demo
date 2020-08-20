import React,{useEffect,useState} from 'react';

export default function useReader(){
    const [position,setPosition]=useState({x:0,y:0});
    useEffect(()=>{
        const updateMouse=(e)=>{
            setPosition({x:e.clientX,y:e.clientY})
        }
        document.addEventListener('mousemove',updateMouse)
        return()=>{
            document.removeEventListener('mousemove',updateMouse)
        }
    })
    return position
}

