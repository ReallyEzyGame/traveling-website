


export function HeaderBar() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            padding: '1em 2em 1em 1em'
        }}>
            <div style={{
                display: 'flex',
                position: 'absolute',
                left: 0
            }}>
                <h3>Eig8t</h3>
            </div>
            {/*Search bar */}
            <input style={{
                display: 'block',
                position: 'absolute',
                borderColor: 'black',
                borderRadius: '1em',
                height: 'fit-content',
                width: '30%',
                left: '35%'
            }}
                placeholder="Search..."
                id="review-header-input"
            />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                position: 'absolute',
                right: '1em'
            }}>
                <p>This is it</p>
            </div>
        </div>
    )
}