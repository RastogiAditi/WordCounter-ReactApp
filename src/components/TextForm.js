import React, { useState } from "react";


function TextForm(props) {
  //Upper Casing Method...............
  const clickToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper Casing is done....... ", "success");
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    if(newText.length===null){
      setWordCount(newText.length);
    }
    else{
    setText(event.target.value);
    const words = newText.trim().split(/\s+/);
      setWordCount(words.length);
    }
   
  };

  //  Lower Casing Method...............
  const clickToLowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("lower Casing is done....... ", "success");
  };
  //Camel Casing Method...............
  // const capitalize = (word) => {
  //   let lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // };
  // const clickToCamelCase = () => {
  //   const arr = text.split(/[.]/);
  //   // for(let i=0; i<text.split(".").length; i++){
  //   //   arr[i].splice(text.split("."));
  //   // }
  //   // console.log(typeof(arr));
  //  const camelText=[];
  //   for (let i = 0; i < arr.length; i++) {
  //      camelText[i] = arr[i].charAt(0).toUpperCase() +arr[i].slice(1);
      
  //   }
  //    setText(camelText);
  // };

  //Clear text....................
  const clearText = () => {
    let clearTxt = "";
    setText(clearTxt);
    props.showAlert("All text is deleted. ", "success");
  };
  // Copytext......................
  const copyText = () => {
    var textCopy = document.getElementById("myBox");
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value);
    props.showAlert("Text is copied ", "success");
  };
  //Paste Text.........................
  const pasteText = () => {
    let textCopy = text;
    setText(text + "\n" + textCopy);
    props.showAlert("Text is pasted  ", "success");
  };
  const [text, setText] = useState("Enter Your Text");
  const [wordCount, setWordCount] = useState(3);
 

  return (
    <div
      className="container-fluid"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{
            background: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
      </div>
      <div
        className="container-fluid"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        align="center"
      >
        <button className="btn btn-primary mx-2" onClick={clickToUpperCase}>
          Covert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clickToLowerCase}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear
        </button>
        <button className="btn btn-primary " onClick={copyText}>
          {" "}
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={pasteText}>
          {" "}
          Paste
        </button>

        {/* <button className="btn btn-primary" onClick={clickToCamelCase}>
          {" "}
          Convert to CamelCase
        </button> */}
      </div>
      <div
        className="container"
        style={{
          background: props.mode === "dark" ? "light" : "dark",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <p>
        {wordCount} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Time Taken To Read </p>
        <p>{text.split(".").length-1} Sentences</p>
        <p>{text.split("\n").length-1} Paragraphs </p>
        <h2>Preview Text</h2>
        <p>{text}</p>
        
      </div>
    </div>
  );
}
export default TextForm;
