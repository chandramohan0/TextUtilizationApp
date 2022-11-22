import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was Clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=>{
    // console.log("UpperCase was Clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  // const handleCapitalizeClick = ()=>{
  //   // console.log("UpperCase was Clicked: " + text);
  //   let newText = text.toUpperCase(text[0]);
  //   setText(newText);
  // }
  
  const handleClearTextClick = ()=>{
    // console.log("UpperCase was Clicked: " + text);
    setText('');
  }
  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text="new text"; //Wrong way to change the state
  // setText("new Text"); //Correct way to change the text
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button> 
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Capitalized Text</button> */}
      <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear Text</button>
 
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
