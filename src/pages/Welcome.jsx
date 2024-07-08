import { Link } from "react-router-dom";


function Welcome() {
    return (
        <div className="welcome">
            <h1 id="welcome-title">

                Welcome to the Preqin Investor Details
            </h1>
            <div id="welcome-body">
                Please <Link onClick={() => window.location = "/investors"}>click here</Link> for dashboard
            </div>
        </div>
    )
}

export default Welcome;