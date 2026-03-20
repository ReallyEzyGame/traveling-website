import { LeftSideBar, LeftSideBarProvider } from "../../components/left-side-bar/LeftSideBar";
import { ShortReview } from "./components/LeftSideBar";
import { ReccomemendBox, RecommendItem } from "./components/Recommend";
import { ReviewFrame } from "./components/ReviewComment";
import './ReviewPage.css';



function ReviewPage() {
    return (
        <div className="flex flex-row h-screen w-screen bg-rose-300">

            <div className="review-body-page">
                <LeftSideBarProvider>
                    <LeftSideBar className="left-side-bar">
                        <ShortReview />
                    </LeftSideBar>
                </LeftSideBarProvider>
                {/* Seperator */}
                <div className="vertical-seperator" />
                <ReviewFrame />
            </div>
            <ReccomemendBox>
                <RecommendItem>Sign in with Goggle</RecommendItem>
            </ReccomemendBox>

        </div>
    );
}



export default ReviewPage;

