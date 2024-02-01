import './style.css'
const Update = () => {
    return (
        <div className='update'>
            <div className="updateWrapper">
                <div className="postAndStatus">
                    <div className="post">
                        <div><span className='updateText'>Post an Update:</span></div>
                        <div><input type="text" /></div>
                    </div>
                    <div className="status">
                        <div><span className='updateText'>Update Status:</span></div>
                        <div className='currentStatus'><span>In Progress</span></div>
                        <div className='currentStatus'><span>Complete</span></div>
                        <div className='currentStatus'><span>Stuck</span></div>
                        <div className='currentStatus'><span>Not Started</span></div>
                    </div>
                </div>
                <div className="postButton">
                    <button>Post Update</button>
                </div>
            </div>
        </div>
    )
}

export default Update
