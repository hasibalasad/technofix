/* eslint-disable react/prop-types */

function UserListItem({ user }) {
    const { firstName, lastName, email, image, address, company } = user;
    return (
        <div className="bg-white rounded-md p-4 shadow-md">
            <div className="mb-4">
                <img
                    className="w-full h-32 object-contain mb-4"
                    src={image} // Replace with the actual user image URL
                    alt={`${firstName} ${lastName}'s avatar`}
                />
                <h2 className="text-lg font-semibold text-center">{`${firstName} ${lastName}`}</h2>
                <p className="text-gray-600 text-center">Email: {email}</p>
                <p className="text-gray-600 text-center">Address: {`${address.address},${address.city}`}</p>
                <p className="text-gray-600 text-center">Company Name: {company.name}</p>
            </div>
        </div>
    );
}

export default UserListItem