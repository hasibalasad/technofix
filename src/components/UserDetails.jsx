
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchSingleUser } from "../redux/feature/singleUser/singleUserSlice";
import { useParams } from "react-router-dom";

function UserDetails() {
    const dispatch = useDispatch();
    const singleUser = useSelector((state) => state.singleUser.users);
    const { id } = useParams()

    console.log(singleUser)

    const { image, firstName, lastName, email, address, company } = singleUser;

    useEffect(() => {
        dispatch(fetchSingleUser(id))
    }, [dispatch, id])
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">User Details</h1>
            <div>
                <img src={image} alt={firstName} />
            </div>
            <div>
                <p>{firstName} {lastName}</p>
                <p>{email}</p>
                <p>{company?.name}</p>
                <p>{address?.address}</p>
                <p>{address?.city}</p>
            </div>
        </div>
    )
}

export default UserDetails
