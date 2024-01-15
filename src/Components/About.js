import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState( {
        color:'black',
        background:'white'
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle =()=>{
        if (myStyle.color ==='black'){
            setMyStyle({
                    color:'white',
                    background:'black'
            });
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:'black',
                background:'white'
            
        })
        setBtnText("Enable Light Mode");
        }
    }

  return (
                <div className = "container" style={myStyle}>
                    <h2>About Us</h2>
                <div className="accordion" id="accordionExample"style={myStyle} >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count , character count or 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and character.Thus it is suitable  for writinf text with word/character linit. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browser such as chrome, firefox, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, Pdf document, essasys etc.  
                </div>
                </div>
            </div>
            </div>
            <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
    </div>
  )
}
