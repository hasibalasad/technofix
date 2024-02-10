/* eslint-disable react/prop-types */

function UserListItem({ user }) {
    const { firstName, lastName, email, image, address, company } = user;
    return (
        <div className="bg-white rounded-md p-4 sm:pt-10 shadow-md sm:h-96 hover:scale-110 transition duration-300 border">
            <div className="mb-2 sm:mb-8">
                <img
                    className="w-full h-32 object-contain mb-4"
                    src={image}
                    alt={`${firstName} ${lastName}'s avatar`}
                />
                <h2 className="text-lg font-semibold text-center">{`${firstName} ${lastName}`}</h2>
                <p className="text-gray-600 text-center"><span className="font-semibold">Email: </span>{email}</p>
                <p className="text-gray-600 text-center"><span className="font-semibold">Address: </span>{`${address.address},${address.city}`}</p>
                <p className="text-gray-600 text-center"><span className="font-semibold">Company Name: </span> {company.name}</p>
            </div>
        </div>
    );
}

export default UserListItem