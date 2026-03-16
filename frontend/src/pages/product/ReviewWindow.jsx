import { useState } from "react"



function ReviewWindow() {
    const [curColor, setCurColor] = useState(0);
    const colorArray = ['red', 'black','blue', 'darkgreen','violet'];

    function handleNextColor() {
        setCurColor((curColor + 1) % colorArray.length);
    }
    function handlePrevColor() {
        setCurColor((curColor - 1 + colorArray.length) % colorArray.length);
    }

    return (
        <>
            <div className="sliding-window">
                <div className="scroll-window">
                    <button onClick={() => handlePrevColor()}> &lt; </button>
                    <div style={{backgroundColor: `${colorArray[(curColor + 1) % colorArray.length]}`}}>

                    </div>
                    <button onClick={() => handleNextColor()}> &gt; </button>
                </div>
                <div className="sight-review" style={{backgroundColor: `${colorArray[curColor]}`}}>

                </div>
            </div>
        </>
    )
}

export default ReviewWindow;