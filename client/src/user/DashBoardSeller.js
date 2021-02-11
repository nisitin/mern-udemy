import DashBoardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";

const DashBoardSeller = () => {
    return (
        <>
            <div className="container-fluid bg-secondary p-5">
                <ConnectNav />
            </div>

            <div className="container-fluid p-4">
                <DashBoardNav />
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <h1>Your Hotels</h1>
                    </div>
                    <div className="col-md-2">
                        <Link to="/hotels/new" className="btn btn-primary">
                            * Add new
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoardSeller;