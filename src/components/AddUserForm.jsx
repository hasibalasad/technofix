import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/feature/users/usersSlice"


function AddUserForm() {
    const dispatch = useDispatch();
    const [addUserLocal, setAddUserLocal] = useState({
        firstName: "",
        lastName: "",
        email: "",
        image: "",
        address: {
            address: "",
            city: "",
        },
        company: {
            name: "",
        }
    });
    const { image, firstName, lastName, email, address, company } = addUserLocal;



    const handleInput = (e) => {
        setAddUserLocal({
            ...addUserLocal,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(addUserLocal));
        setAddUserLocal({
            firstName: "",
            lastName: "",
            email: "",
            image: "",
            address: {
                address: "",
                city: "",
            },
            company: {
                name: "",
            }
        });
    }
    return (
        <div className="mx-8 mt-8 text-center sm:w-1/3 sm:mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add User</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="firstName"
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="First Name"
                    onChange={handleInput} value={firstName}
                />

                <input
                    type="text"
                    name="lastName"
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="Last Name"
                    onChange={handleInput}
                    value={lastName}
                />

                <input
                    type="email"
                    name="email"
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="Email"
                    value={email}
                    onChange={handleInput}
                />

                <input
                    type="text"
                    name="address"
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="Address"
                    value={address.address}
                    onChange={(e) => {
                        setAddUserLocal({
                            ...addUserLocal,
                            address: {
                                ...addUserLocal.address,
                                address: e.target.value
                            }
                        })
                    }}
                />

                <input
                    type="text"
                    name="city"
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="City"
                    value={address.city}
                    onChange={e => setAddUserLocal({
                        ...addUserLocal,
                        address: {
                            ...addUserLocal.address,
                            city: e.target.value
                        }
                    })}
                />

                <input
                    type="text"
                    name="company"
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="Company"
                    value={company.name}
                    onChange={(e) => {
                        setAddUserLocal({
                            ...addUserLocal,
                            company: {
                                name: e.target.value
                            }
                        })
                    }}
                />

                <input
                    type="text"
                    name="image"
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="Image URL"
                    onChange={handleInput}
                    value={image}
                />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>

            </form>
        </div>
    )
}

export default AddUserForm
