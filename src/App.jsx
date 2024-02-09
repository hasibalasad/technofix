import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserListPage from "./pages/UserListPage"
import SingleUserPage from "./pages/SingleUserPage"

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserListPage />} />
                <Route path="/user/:id" element={<SingleUserPage />} />
            </Routes>
        </Router>

    )
}

export default App
