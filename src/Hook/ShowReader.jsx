import React from 'react'
import useReader from './UseReader'

export default function ShowReader(){
    const position=useReader();
    return (
        <div>
            <div>x:{position.x}</div>
            <div>y:{position.y}</div>
        </div>
    )
}