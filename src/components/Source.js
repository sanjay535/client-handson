import React from 'react'

export default function Source(props) {
    const handleDragOver = event => {
    event.preventDefault(); // Necessary. Allows us to drop.
    event.dataTransfer.effectAllowed='move';
    return false;
    };
   const handleDrop = (event, i, j) => {
    event.preventDefault();
    
    let dataAttached = JSON.parse(event.dataTransfer.getData("dragContent"));
    // console.log('drop attched data=',dataAttached);
    // console.log('on drap indexes=',i,j)
    props.handleTileDrop(i, j, dataAttached);
    return false;
    };
  return (
    <div className='source' 
    onClick={()=>props.handleSourceClick(props.i, props.j)} 
    style={{backgroundColor:`rgb(${props.r},${props.g}, ${props.b})`}}
    onDragOver={(e)=>handleDragOver(e)}
    onDrop={(e)=>handleDrop(e, props.i, props.j)}
    ></div>
  )
}
