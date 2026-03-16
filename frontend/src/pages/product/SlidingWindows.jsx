import { useState } from "react";
import './Product.css'

function SlidingWindow() {
    // replace with API later
    const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    const [curColor, setCurColor] = useState(0);

    function handleMoveBackward() {
        setCurColor((curColor + colors.length - 1) % colors.length);
    }
    function handleMoveForward() {
        setCurColor((curColor + 1) % colors.length);
    }

    const prev = (curColor - 1 + colors.length) % colors.length;
    const next = (curColor + 1) % colors.length;
    return (
        <>
            <div className="sliding-frame">
                <button onClick={() => handleMoveBackward()} className="btn-type-2"> &lt; </button>
                <div className="sliding-frame-grid">
                    <div className="card-type-1" style={{backgroundColor: `${colors[prev]}`}}></div>
                    <div className="card-type-1" style={{backgroundColor: `${colors[curColor]}`}}></div>
                    <div className="card-type-1" style={{backgroundColor: `${colors[next]}`}}></div>
                </div>
                <button onClick={() => handleMoveForward()} className="btn-type-2"> &gt; </button>
            </div>
        </>
    );
}

export default SlidingWindow;