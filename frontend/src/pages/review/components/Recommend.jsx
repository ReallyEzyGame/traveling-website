import { secondsToMilliseconds } from "framer-motion";



// parameter when fully develop: contents
export function ReccomemendBox({children}) {
    return (
        <div style={{
            display: 'block',
            height: 'fit-content',
            width: '200px',
            backgroundColor: 'white',
            padding: '5em',
            borderRadius: '0.5em'
        }}>
            {children}
        </div>
    );
}

export function RecommendItem({children}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: 'fit-content',
            padding: '1em',

            border: '1px solid black'
        }}
            onClick={() => alert('item has been clicked!!')}
        >
            {children}
        </div>
    )
}