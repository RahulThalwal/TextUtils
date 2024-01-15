import React, { useState } from 'react';

const TextForm = (props) => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState([]);

  console.log(props.mode,"p" )

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'Success');
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'Success');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Clear Text', 'Success');
  };

  const handleEmailClick = () => {
    const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setEmail(emails || []);
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea
  className="form-control"
  value={text}
  onChange={handleOnChange}
  style={{
    backgroundColor: props.mode === 'dark' ? 'red' : 'green',
    color: props.mode === 'dark' ? 'white' : 'black'
  }}
  id="myBox"
  rows="8"
></textarea>

        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleEmailClick}>
          E-mail Extract
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter Something in the text box to preview it here'}</p>
        <h2>Extract Email</h2>
        <ul>
          {email.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TextForm;
