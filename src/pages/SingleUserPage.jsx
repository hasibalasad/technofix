import { Link } from "react-router-dom"
import UserDetails from "../components/UserDetails"




function SingleUserPage() {



    return (
        <div className="container mx-auto mt-8">

            <UserDetails />
            <Link to="/">
                <div className="text-center mt-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">Go Back</button>
                </div></Link>
        </div>
    )
}

export default SingleUserPage