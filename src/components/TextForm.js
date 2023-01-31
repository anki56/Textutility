import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let new_text = text.toUpperCase();
    setText(new_text);
   props.showAlert("Converted to UpperCase !" ,"success")
  };
  const handleLoClick = () => {
    let new_text = text.toLowerCase();
    setText(new_text);
    props.showAlert("Converted to LowerCase !" ,"success")
  };
  const handleClearClick = () => {
    let new_text = "";
    setText(new_text);
    props.showAlert("Textbox is cleared","success")
  };

  const handleCopyText =()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success")
  }
  const handleextraSpaces =()=>{
    let new_text = text.split(/[ ]+/);
    setText(new_text.join(" "))
   
    navigator.clipboard.writeText(text.value);
    props.showAlert("Removed extra spaces","success")
  }

  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  //  const [text, setText] = useState("Enter Text here");
  const [text, setText] = useState("");
  // text ="Wrong way for chsanging state"
  // setText("Rightway ")

  return (
    <>
      <div className="container" style={{ color:  props.mode ==='dark' ? 'white' : 'black'}}>
        <h1 className="heading-text">{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style= {{backgroundColor : props.mode ==='dark'? 'gray' : 'white', color:  props.mode ==='light' ? 'black' : 'white'}}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-info mx-1" onClick={handleUpClick} style={{ color:  props.mode ==='dark' ? 'white' : 'black'}}>
          Convert to UpperCase
        </button>
        <button className="btn btn-info mx-1" onClick={handleLoClick} style={{ color:  props.mode ==='dark' ? 'white' : 'black'}}>
          Convert to LowerCase
        </button>
        <button className="btn btn-info mx-1" onClick={handleClearClick} style={{ color:  props.mode ==='dark' ? 'white' : 'black'}}>
          Clear text
        </button>
        <button className="btn btn-info mx-1" onClick={handleCopyText} style={{ color:  props.mode ==='dark' ? 'white' : 'black'}}>
          Copy text
        </button>
        <button className="btn btn-info mx-1" onClick={handleextraSpaces} style={{ color:  props.mode ==='dark' ? 'white' : 'black'}}>
          Remove extra spaces
        </button>
      </div>


      <div className="container my-3" style={{ color:  props.mode ==='dark' ? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0? text : 'Enter Something to preview'}</p>
      </div>
    </>
  );
}
