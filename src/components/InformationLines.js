import React from 'react'
import Tile from './Tile'

export default function InformationLines(props) {
  console.log('information Lines=',props)
  return (
    <div>
        <h3 className='game-name'>RGB Alchemy</h3>
        <div className='user-id'>User ID: {props.userId}</div>
        <div className='moves-left'>Moves left: {props.moves}</div>
        <div className='target-color'><div>Target color</div> <Tile {...props.targetColor} i={"ti"} j={'tj'}/></div>
        <div className='closest-color'><div>Closest color</div><Tile {...props.closestColor}  i={"ci"} j={'cj'}/> <div>&nbsp;&nbsp;&#916; = {(Math.round(props.delta* 100)/100).toFixed(2)}%</div></div>
    </div>
  )
}
