import './style.css'
const Activity = () => {
    return (
        <div className='activity'>
            <div className="activityWrapper">
                <div className='activityHeading'>
                    <span>Activity</span>
                </div>
                <div className='activityList'>
                    <div className="activity1">
                        <div>Suzette Goldstein</div>
                        <div>Suzette Goldstein</div>
                        <div>Brian Jenek</div>
                    </div>
                    <div className="activity1 taskName">
                        <div><span>Created this task</span></div>
                        <div><span>Marked this task In Progress</span></div>
                        <div><span>Submitted a document</span></div>
                    </div>
                    <div className="activity1">
                        <div><span>08/24/2023</span></div>
                        <div><span>09/06/2023</span></div>
                        <div><span>08/26/2023</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Activity
