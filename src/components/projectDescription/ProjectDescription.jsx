import './style.css'
import Eye from '../../assets/Eye.jsx'

const ProjectDescription = () => {
    return (
        <div className='projectDesc'>
            <div>
                <h1 className='projectHeading' >New York High Rise / Task</h1>
            </div>
            <div className='projectBlock'>
                <div className='ProjectWrapper'>
                    <div className='task'>
                        <div className='taskHeading'>Create Architectural Concepts</div>
                        <div className='taskButtons'>
                            <button>Edit Task </button>
                            <button>End Task</button>
                        </div>
                    </div>
                    <div className='detailBlock'>
                        <div className="details">
                            <div>
                                <label>Assigned to:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Assigned by:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Due Date:</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label>Project:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Status:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Priority:</label>
                                <input type="text" />
                            </div>

                            <div>
                                <Eye />
                                <span>2</span>
                            </div>

                        </div>
                        <div className="description">
                            <div className='descriptionWrapper'>
                                <label>Description:</label>
                                <input height="100" type="text" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProjectDescription
