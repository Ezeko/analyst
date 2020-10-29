import React from 'react'


const Card = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            <a href="/dashboard">View</a>
                            <a href="/dashboard">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card