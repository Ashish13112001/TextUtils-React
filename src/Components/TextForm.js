import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("clicked: ");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText=()=>{
        setText("")
    }
    const handleCopy=()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        
    }
    const handleOnChange=(event)=>{
        console.log('on change');
        setText(event.target.value);
    }
    const[text,setText] = useState('')
    return (
        <>
        
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3 ">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'?'white':'#222f3d',color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
        </div>
        <div className='container my-2' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ")} Words and {text.length} Character</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something to preview here"}</p>
        </div>
        </>
    )
}