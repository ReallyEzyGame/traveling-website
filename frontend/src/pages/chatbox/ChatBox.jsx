import { FixSideBar } from "../../components/left-side-bar/FixLeftSideBar";
import { LeftSideBar, LeftSideBarProvider } from "../../components/left-side-bar/LeftSideBar";
import { ConversationBox } from "./components/ConversationBox";



function ChatBox() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%'
        }}>
            <FixSideBar style={{ backgroundColor: 'pink' }} />
            <FixSideBar style={{backgroundColor: 'red', width: '400px'}} />

            <div>
                <ConversationBox />
            </div>
        </div>
    );
}


export default ChatBox;