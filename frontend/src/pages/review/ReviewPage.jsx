import { LeftSideBar, LeftSideBarProvider } from "../../components/left-side-bar/LeftSideBar";
import { HeaderBar } from "./components/HeaderBar";
import { ShortReview } from "./components/LeftSideBar";
import { ReccomemendBox, RecommendItem } from "./components/Recommend";
import { ReviewFrame } from "./components/ReviewComment";
import './ReviewPage.css';



function ReviewPage() {
    return (
        <>
            <HeaderBar />
            <hr />
            <div className="review-body-page">
                <LeftSideBarProvider>
                    <LeftSideBar className="left-side-bar">
                        <ShortReview />
                    </LeftSideBar>

                </LeftSideBarProvider>
                {/* Seperator */}
                <div className="vertical-seperator"/>
                <ReviewFrame/>

                <ReccomemendBox>
                    <RecommendItem>Sign in with Goggle</RecommendItem>
                </ReccomemendBox>
            </div>
        </>
    );
}



export default ReviewPage;

