import "./header.css"

const items = ['Sign in', 'Configuration', 'Report'];

function DropdownContent() {
    return (
        <>
            <div className="dropdown-menu">
                {
                    items.slice(0, items.length - 1).map(item => (
                        <div key={item}>
                            <div className="dropdown-item">
                                <p>{item}</p>
                            </div>
                        </div>
                    ))
                }
                <div key={items[items.length - 1]}>
                    <div className="dropdown-item">
                        <p>{items[items.length - 1]}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DropdownContent;