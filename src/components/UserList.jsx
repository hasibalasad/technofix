import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/feature/users/usersSlice"
import UserListItem from './UserListItem';
import { Link } from 'react-router-dom';
import InputFields from './InputFields';

function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const sortingState = useSelector((state) => state.filter);

    const searchFilter = (user) => {
        if (sortingState.search.length > 0) {
            return user.firstName.toLowerCase().includes(sortingState.search.toLowerCase())
        }
        return user
    }

    const selectFilter = () => {
        let usersCopied = [...users];
        if (sortingState.select === "name") {
            return usersCopied.sort((a, b) => a.firstName.localeCompare(b.firstName))
        }
        if (sortingState.select === "email") {
            return usersCopied.sort((a, b) => a.email.localeCompare(b.email))
        }
        if (sortingState.select === "company") {
            return usersCopied.sort((a, b) => a.company.name.localeCompare(b.company.name))
        }

        return users
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <div className="container mx-auto mt-8">
            <InputFields />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-3">
                {
                    selectFilter()
                        .filter((user) => {
                            return searchFilter(user)
                        })
                        .map((user) => (

                            <Link to={`/user/${user.id}`} key={user.id}>
                                <UserListItem key={user.id} user={user} />
                            </Link>
                        ))

                }
            </div>
        </div>
    );
}

export default UserList
