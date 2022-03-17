import React, { useState, useRef } from 'react'

export default function TextForm(props) {
    const ref = useRef(null);
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        // console.log('Uppercase was clicked!!' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlertMessage("Text converted to Uppercase",'success');
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlertMessage("Text converted to Lowercase",'success');

    }

    const sentanceCapital = () => {
        // let newText = text.charAt(0).toUpperCase() + text.slice(1);
        let newText = text.toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase());
        setText(newText);
        console.log('sentance Capital --- ' , newText);
        props.showAlertMessage("Sentance First letter becomes capital!",'success');

    }

    const clearData = () => {
        let newText = '';
        setText(newText);
        props.showAlertMessage("Text cleared!",'success');

    }
    

    const copyText = (e) => {
        console.log('copy text----',ref.current.value);
        if(ref.current.value.length > 0 ){
            ref.current.select();
            document.execCommand('copy');
            e.target.focus();
            props.showAlertMessage("Text copied",'success');
        }else{
            props.showAlertMessage("Please enter some text to copy!",'danger');
        }
    }

    const removeExtraSpaceText = () => {
        let newText = text.trim().split(/ +/).join(' ');
        setText(newText);   
        props.showAlertMessage("Extra spaces from text removed",'success');
    }

    const handleOnChange = (event) => {
        console.log(' On Change!!--->>');
        setText(event.target.value);;
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className='form-control' value={text} ref={ref}
                        onChange={handleOnChange} id="myBox" rows="8" style={{
                            backgroundColor: props.mode === 'dark' ? '#010d19' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to  Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert to  Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={sentanceCapital}>Every Word First Letter Capital</button>
                <button className='btn btn-primary mx-1' onClick={clearData}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={copyText}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={removeExtraSpaceText}>Remove Extra Space</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
             <p>{text.split(" ").length} words, {text.length} characters</p>
             {/* <p>{text.split(/\+/).filter((element)=>{ */}
                 {/* return element.length!==0}).length} words, {text.length} characters</p> */}
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the above textbox to preview here'}</p>
            </div>
        </>
    )
}
