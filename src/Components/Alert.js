import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower=word.toLowercase();
    return lower.charAt(0).touppercase() + lower.slice(1);
  }
  return (
  <div style={{height:'50px'}}>
  {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong> : {props.alert.msg}
</div>}
</div>
  )
}

export default Alert
