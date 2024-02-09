/* eslint-disable react/prop-types */

function UserListItem({ user }) {
    const { id, name, email, image } = user;
    return (
        <div className="bg-white rounded-md p-4 shadow-md">
            <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={image} // You can replace this with the actual user image URL
                        alt={`${name}'s avatar`}
                    />
                </div>
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">{name}</h2>
                </div>
            </div>
            <p className="text-gray-600">{`ID: ${id}`}</p>
            <p className="text-gray-600">{`Email: ${email}`}</p>
        </div>
    );
}

export default UserListItem