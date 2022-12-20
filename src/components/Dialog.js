import React from 'react';

export default function Dialog(props) {
    
    const handleCancelClick=(e)=>{
        e.target.parentElement.parentElement.parentElement.style.display = 'none';
    }
    const handleOkClick=(e)=>{
        e.target.parentElement.parentElement.parentElement.style.display = 'none';
        props.handleRestartOnOkButtonClick();
    }
    return (
      <div id='myModal' className='modal'>
        <div className='modal-content'>
         <h6>{props.message}</h6>
          <div className='buttons'>
            <button className='cancel' onClick={(e)=>handleCancelClick(e)}>Cancel</button>
            <button className='ok'  onClick={(e)=>handleOkClick(e)}>OK</button>
          </div>
        </div>
      </div>
    );
  
}
