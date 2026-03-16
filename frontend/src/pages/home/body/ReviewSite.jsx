import './body.css'

function ReviewSite() {
    return (
        <>
            <div className="grid-container-1">
                <div className='review-box' style={{ gridArea: 'box-1', backgroundImage: 'url(/images/lake-pine.jpg)', backgroundPosition: '50% 50%', backgroundSize: '100%' }}></div>
                <div className='review-box' style={{
                    gridArea: 'box-2', backgroundImage: 'url(/images/lake-house.jpg)', backgroundSize: '100%', backgroundPosition: '50% 50%'
                }}>
                </div>
                <div className='review-box' style={{
                    gridArea: 'box-3', backgroundImage: 'url(/images/lake-big-pine.jpg)', backgroundSize: '100%', backgroundPosition: '50% 50%'
                }}>
                </div>
                <div className='review-box' style={{ gridArea: 'box-4', backgroundImage: 'url(/images/lake-boat.jpg)', backgroundPosition: '50% 50%', backgroundSize: '100%' }}></div>
            </div>
            <div className='slide-container-2'>
                <button className='left-btn'> &lt; </button>
                <div></div>
                <button className='right-btn'> &gt; </button>
            </div>
        </>
    );
}

export default ReviewSite;