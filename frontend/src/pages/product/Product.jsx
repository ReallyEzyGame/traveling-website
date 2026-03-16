import { HeroBanner } from "./HeroBanner";
import { NavBar } from "./NavBar";
import "./Product.css"
import ReviewWindow from "./ReviewWindow";
import SlidingWindow from "./SlidingWindows";

function Product({ ...props }) {
    return (
        <>
            {/* Header */}
            <NavBar />
            {/* Body */}
            <div>
                <div className="wrapper-type-1">
                    <HeroBanner src={"/images/flower-field.jpg"} >
                        <h2>YOLO</h2>
                        <p>visit top 10 for tourism</p>
                    </HeroBanner>
                    <ReviewWindow />
                    <h1>Some Places</h1>
                    {/* First Grid */}
                    <div className="reivew-zone">
                        <div className="grid-type-1">
                            <div className="box" style={{ gridArea: "box-1" }}></div>
                            <div className="box" style={{ gridArea: "box-2" }}></div>
                            <div className="box" style={{ gridArea: "box-3" }}></div>
                            <div className="box" style={{ gridArea: "box-4" }}></div>
                            <div className="box" style={{ gridArea: "box-5" }}></div>
                        </div>
                        {/* Second Grid */}
                        <h2>Other View</h2>
                        <div className="grid-type-2">
                            <div className="box" style={{ gridArea: "box-1" }}></div>
                            <div className="box" style={{ gridArea: "box-2" }}></div>
                            <div className="box" style={{ gridArea: "box-3" }}></div>
                            <div className="box" style={{ gridArea: "box-4" }}></div>
                        </div>
                    </div>
                    <div>
                        <h2>Review from Tourist</h2>
                        <SlidingWindow />
                    </div>
                </div>
            </div>
        </>)
}

export default Product;