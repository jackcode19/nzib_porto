import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Home from "./pages/home/Home"
import Dashboard from "./pages/admin/Dashboard"
import AddCollection from "./pages/admin/AddCollection"
import ListCollection from "./pages/admin/ListCollection"
import Login from "./pages/admin/user/Login"
import MyState from "./context/data/MyState"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { auth } from "./firebase/firebaseConfig"

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
  }, [])

  const ProtectedRoute = ({ children }) => {
    if (user) {
      return children
    } else {
      return <Navigate to={"/login"} />
    }
  }

  // console.log(user)

  return (
    <MyState>
      <ToastContainer position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-add-collection"
            element={
              <ProtectedRoute>
                <AddCollection user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-list-collection"
            element={
              <ProtectedRoute>
                <ListCollection user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App
