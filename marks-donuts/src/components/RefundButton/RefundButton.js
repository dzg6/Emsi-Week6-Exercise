import React, { useState, useEffect } from 'react';

export function RefundButton(props) {
    const [refund, setRefund] = useState(false);

useEffect(() => {

  if(props.refund){
  setRefund(props.refund)
  }else{
    setRefund(false)
  }
  
  });

function test(){
  props.getRefund(props.id)
}

  return (
    <div>
      <button onClick={test} >
        {refund ? <span>Cancel Refund</span> : <span>Refund Order</span> }
        </button>

    </div>
  );
}


