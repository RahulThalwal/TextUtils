import React, {useState} from 'react'



export default function Textform(props) {
  debugger
  const handleupClick= ()=> {
   // console.log ("Uppercase was clicked" + text );
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "Success");
  }

  const handleloClick= ()=> {
    // console.log ("Uppercase was clicked" + text );
     let newText= text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to Lowercase", "Success");
   }


   const handleclearClick= ()=> {
    // console.log ("Uppercase was clicked" + text );
     let newText= ''();
     setText(newText)
     props.showAlert("Claer Text", "Success");
   }

   const handleemailClick= () => {
    const emails =  text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setEmail(emails)
    }


  const handleonChange= (event)=> {
    //console.log ("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  const [email,setEmail] = useState([])
  //text="new Text"; wrong way to change the state
  // setText("newText"); Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleemailClick}>E-mail Extract</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2> Your Text Summary </h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in text box to preview it here"}</p>
      <h3>Extract Email</h3>
      <ul> {email.map(e => (
        <li>{e}</li>
      ))}</ul>
    </div>
    </>
  )
}
