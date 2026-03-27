import { useEffect, useRef, useState } from "react";




export function InputText({placeholder, className , ...rest}) {

    const [text, setText] = useState('')
    const textAreaRef = useRef(null)

    useEffect(() => {
        const target = textAreaRef.current;
        if (target) {
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
        }

    }, [text])


    return (
        <>
            <textarea 
                ref={textAreaRef}
                placeholder={placeholder}
                rows={1}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[95%] w-full box-border resize-none overflow-scroll border-none focus:outline-none focus:ring-0 leading-6 no-scrollbar"
            />
        </>
    )
}