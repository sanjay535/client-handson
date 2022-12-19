import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function Tile(props) {
   const handleDragStart = event => {
    const data={r:props.r,g:props.g,b:props.b};
    console.log('dragged data=',data);
    let dataAttached = JSON.stringify({ ...data});
    event.dataTransfer.setData("dragContent", dataAttached);
    };
console.log('Tile props=-',props);
  return (
    <>
      <div id={`${props.i}${props.j}`} 
      draggable={true} 
      className={`tile ${(props?.highlight?.r===props.i && props?.highlight?.c===props.j)?'highlight':''}`} 
      style={{backgroundColor:`rgb(${props.r},${props.g}, ${props.b})`}}
      onDragStart={(e)=>handleDragStart(e)}
      ></div>
      <Tooltip events={['hover']} style={{backgroundColor:'#e6e6e6', color:'#000',padding:'2px 5px'}}  anchorId={`${props.i}${props.j}`} content={`${Math.floor(props.r)},${Math.floor(props.g)},${Math.floor(props.b)}`} place="bottom" />
    </>
  )
}
