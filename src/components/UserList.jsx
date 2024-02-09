import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/feature/users/usersSlice"
import UserListItem from './UserListItem';
import { Link } from 'react-router-dom';

function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    console.log(users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            {users.map((user) => (
                <Link to={`/user/${user.id}`} key={user.id}>
                    <UserListItem key={user.id} user={user} />
                </Link>
            ))}
        </div>
    );
}

export default UserList
