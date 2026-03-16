

const reviews = [
    {
        userId: '1',
        title: "a good place to visit in summer",
        content: "locate in Vung Tau",
        date: "20250315"
    },
    {
        userId: '2',
        title: "decent route for traveling on bike",
        content: "Ba Na hill",
        date: "20220512"
    }
]
const users = {
    user1: {
        avatar: "path"
    },
    user2: {
        avatar: "path"
    }
}
export function ReviewFrame({ /*users, reviews,*/ }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '850px',
            maxWidth: '900px',
            paddingLeft: '8em',
            paddingRight: '4em',
            overflow: 'hidden'
        }}>
            <div>
                {
                    reviews.map((review) => (
                        <Review key={`user${review.userId}`} user={users[`user${review.userId}`]} review={review} />
                    ))
                }
            </div>
        </div>
    )
}

function Review({ user, review }) {
    if (!user || !review) {
        return;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid black',
            paddingTop: '2em'
        }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: "20% 80%",
                    gridTemplateRows: "50% 50%",
                    gridTemplateAreas: "'block-1 block-2' 'block-1 block-3'"
                }}
            >
                <div style={{ gridArea: 'block-1' }}>
                    <img style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        justifySelf: 'center',
                        alignSelf: 'center'
                    }} src={user.avatar} alt="Picture"
                    />
                </div>
                <div style={{ gridArea: 'block-2', width: 'fit-content' }}>
                    <h3>{review.title}</h3>
                </div>
                <div style={{ gridArea: 'block-3' }}>
                    <p>{`${review.date.slice(6,8)}/${review.date.slice(4,6)}/${review.date.slice(0,4)}`}</p>
                </div>
            </div>
            <div style={{
                justifyContent: 'center'
            }}>
                <p>{review.content}</p>
            </div>
        </div>
    )
}