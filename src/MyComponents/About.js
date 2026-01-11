import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        background : 'black',
    })
    
    const [btnText ,setBtntext] = useState("Enable Dark Mode")

    const toggleStyle = () =>{
        if (myStyle.color === 'black'){
            setMyStyle({
                color : 'white',
                background : 'black',
                border : '1px solid white'
            })
            setBtntext ("Enable Dark  Mode");
        }
        else{
            setMyStyle({
                color: 'black',
                background: 'white'
            })
            setBtntext ("Enable Light Mode");
        }
    }
    
  return (
    <div className="container" style ={myStyle}>
    <h2 className='my-2'>About TextUtils</h2>

      <div className="accordion" id="accordionExample" style={myStyle}>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style ={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              What is TextUtils?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils</strong> is a simple and powerful text manipulation tool.
              It allows users to analyze, modify, and format text efficiently.
              You can convert text to uppercase or lowercase, copy text, and remove extra spaces.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Why use TextUtils?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils helps users save time when working with text.
              It is especially useful for students, developers, and content writers
              who frequently need quick text transformations and analysis.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Features of TextUtils
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils provides features like word count, character count,
              text case conversion, copying text to clipboard, and a clean
              dark/light mode interface for better readability.
            </div>
          </div>
        </div>

      </div>

      <div className="container my-3"></div>
      <button onClick={toggleStyle} type="button" className="btn btn-primary">
        {btnText}
      </button>

    </div>
  )
}
