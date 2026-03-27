


export function HeroBanner() {
    return (
        <div className="block relative w-[99%] aspect-9/4 md:aspect-17/5 min-h-50 bg-blue-300 p-4 rounded-xl">
            <RecommendBox/>
        </div>
    )
}

function RecommendBox(props) {
    return (
        <div {...props} className={`{${props.className} z-10 flex absolute bottom-0 right-0 bg-orange-600 h-fit min-h-35 w-[30%] m-3 rounded-xl aspect-6/5 md:aspect-6/3`}>
            asfdkasdfasf
        </div>
    )
}