import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { sortBySearch, sortBySelect } from "../redux/feature/filter/filterSlice";


function InputFields() {

    const dispatch = useDispatch()

    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search, select)
    }

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    }
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        if (search !== "") {
            dispatch(sortBySearch(search))
        }
        if (select !== "") {
            dispatch(sortBySelect(select))
        }

    }, [dispatch, search, select])

    return (
        <div className="w-full">
            <form className="flex justify-between items-center" onSubmit={handleSubmit}>
                <div className="ml-3">
                    <label className="text-gray-600 font-semibold ml-3">Sort by </label>
                    <select
                        className="border border-gray-300 rounded-md p-2"
                        value={select}
                        onChange={handleSelectChange}
                    >
                        <option hidden >Default</option>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="company">Company Name</option>
                    </select>
                </div>

                <input
                    type="text"
                    name='search'
                    placeholder='Search...'
                    className='border border-gray-300 rounded-md p-2 mr-3 h-10'
                    value={search}
                    onChange={handleSearchChange}
                />

            </form>
        </div>
    )
}

export default InputFields