
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
        <div className="container mx-auto  w-2/3 border-2 bg-slate-200 p-6">
            <div className="flex justify-center my-4">
                <img src={image} alt={firstName} />
            </div>
            <div className="text-center flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{firstName} {lastName}</h1>
                <p className="text-gray-600">{email}</p>
                <p className="text-gray-600">{company?.name}</p>
                <p className="text-gray-600">{address?.address}</p>
                <p className="text-gray-600">{address?.city}</p>
            </div>
        </div>
    )
}

export default UserDetails
