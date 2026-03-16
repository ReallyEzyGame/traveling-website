


const comments = [
    {
        userId: '1',
        title: 'greate journey in Vinh Long Plain',
        content: 'this is the story about my journey in local places',
        date: '20221223'
    }
];
const users = {
    user1: {
        name: 'Lee'
    }
};


export function ShortReview(/*{ user, comment }*/) {
    return (
        <>
            <div>
                {
                    comments.map(comment => (
                        <div key={comment.userId} style={{borderBottom: '1px solid black'}}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '20% 80%',
                                gridTemplateRows: '25% 75%',
                                gridTemplateAreas: '"block-1 block-2" "block-1 block-3"',
                                textOverflow: "ellipsis"
                            }}>
                                <div style={{
                                    gridArea: 'block-1',
                                    justifySelf: 'center',
                                    alignSelf: 'center',
                                    marginRight: '1em'
                                }}>
                                    <img style={{
                                        borderRadius: '50%',
                                        height: '40px',
                                        width: '40px',
                                    }} src={users[`user${comment.userId}`]} alt="Picture" />
                                </div>
                                <div style={{ gridArea: 'block-2' }}>
                                    <h3>{comment.title}</h3>
                                </div>
                            </div>
                            <div>
                                <p style={{margin: 0, paddingLeft: '1em'}}>
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}