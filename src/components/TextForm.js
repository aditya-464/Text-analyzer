import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClickUpper = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to Upper Case","success");
    }
    const handleUpClickLower = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to Lower Case","success");

    }
    const handleUpClickCapitalize = () => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (i === 0) {
                newText += text[i].toUpperCase();
            }
            else {
                if (text[i - 1] === ' ') {
                    newText += text[i].toUpperCase();
                }
                else {
                    newText += text[i];
                }
            }
        }
        setText(newText);
        props.showAlert("Text capitalized","success");

    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");

    }
    const handleInvertClick = () => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toUpperCase()) {
                newText += text[i].toLocaleLowerCase();
            }
            else if (text[i] === text[i].toLowerCase()) {
                newText += text[i].toUpperCase();
            }
            else {
                newText += text[i];
            }
        }
        setText(newText);
        props.showAlert("Text case inverted","success");

    }
    const handleCopyClick = () => {
        var textBox = document.querySelector("#exampleFormControlTextarea1");
        textBox.select();
        navigator.clipboard.writeText(textBox.value);
        props.showAlert("Text copied","success");

    }

    const handleOnChange = (event) => {
        setText(event.currentTarget.value);
        console.log(typeof event);
    }

    return (
        <>
            <div>
                <div className="mb-3 my-4" >
                    <h2>{props.title}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7" placeholder="Enter the text" style={{background : props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black" }}></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClickUpper}>UPPER CASE</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleUpClickLower}>lower case</button>
                <button type="button" className="btn btn-primary" onClick={handleUpClickCapitalize}>Capitalize</button>
                <button type="button" className="btn btn-primary  mx-3" onClick={handleInvertClick}>iNvErT cAsE</button>
                <button type="button" className="btn btn-primary" onClick={handleCopyClick}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <h6>{text === ""?"0":text.split(" ").length} words  and  {text.length} characters</h6>
            </div>
        </>
    )
}
