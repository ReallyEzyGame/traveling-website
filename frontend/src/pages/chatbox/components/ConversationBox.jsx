


const messages = [
    {
        messageId: '1',
        id: '1',
        sender: '1',
        receiver: 'GemmaLLM',
        content: 'What is the color of the sky',
    },
    {
        messageId: '1',
        id: '2',
        sender: 'GemmaLLM',
        receiver: '1',
        content: "it's blueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!",
    }
];
const users = {
    user1: {
        avatar: "path"
    }
};
export function ConversationBox({ style }) {
    // get the current user information through Zustand or Context
    const userId = '1';
    const isLLM = true;
    // becareful to sort the message before( when querying in databse or backend)

    const convs = (mess) => {
        if (mess.sender === userId)
            return <FromUserMessage message={mess} endTransmit={true} />
        if (isLLM)
            return <LLMMessage message={mess} />
        return <ToUserMessage message={mess} endTransmit={true} />
    }

    return (
        <div>
            {
                messages.map(mess => (
                    <div key={mess.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            maxWidth: '500px',
                            width: 'fit-content',
                            minWidth: '800px',
                            maxWidth: '800px',
                            height: 'fit-content',
                            backgroundColor: 'white',
                            ...style
                        }}
                    >
                        {convs(mess)}
                    </div>
                ))
            }
        </div>
    )
}


function LLMMessage({ message }) {
    // call LLM model to handling prompting input
    const avatar = 'PATH';
    return (
        <div style={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
        }}>
            <img src={avatar}
                style={{
                    position: 'relative',
                    height: '40px',
                    width: '40px',
                    marginRight: '40px',
                    borderRadius: '50%'
                }} />

            <Message message={message.content}/>
        </div>
    )
}
function FromUserMessage({ message, endTransmit }) {
    const avatar = users[`user${message.sender}`].avatar;

    return (
        <div style={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'right',
        }}>
            <Message message={message.content} />
            {
                endTransmit ?
                    <img src={avatar}
                        style={{
                            position: 'relative',
                            marginLeft: '40px',
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%'
                        }} /> : null
            }
        </div>
    )
}
function ToUserMessage({ message, endTransmit }) {
    const avatar = users[`user${message.sender}`].avatar;

    return (
        <div style={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
        }}>
            {
                endTransmit ?
                    <img src={avatar}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%'
                        }} /> : null
            }
            <Message message={message.content} />
        </div>
    )
}
// message: a part contains texts
// 'message' above this function refer to an 'object' rather than a plain text of chars
function Message({ style, message }) {

    return (
        <div style={{
            display: "flex",
            position: 'relative',
            width: 'fit-content',
            height: 'fit-content',
            maxWidth: '50%',
            borderRadius: '0.4em',
            backgroundColor: 'blue',
            paddingRight: '1em',
            paddingLeft: '1em',
            wordBreak: 'break-all',
            ...style
        }}>
            <p>
                {message}
            </p>
        </div>
    )
}