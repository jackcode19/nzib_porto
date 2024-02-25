import React, { useState } from "react"
import { auth } from "../../../firebase/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

import Profile from "../../../assets/img/profile.webp"

function Login({}) {
  const initialState = {
    email: "",
    password: "",
  }
  const [state, setState] = useState(initialState)
  const [signIn, setSignIn] = useState(false)
  const [user, setUser] = useState([])

  const { email, password } = state
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleAuth = async (e) => {
    e.preventDefault()
    try {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        setUser(user)
        toast.success("Login successful", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        navigate("/admin")
      } else {
        return toast.error("Semua kolom wajib diisi")
      }
    } catch (error) {
      // console.log(error)
      return toast.error("Password tidak sesuai brader")
      // setLoading(loading)
    }
  }

  return (
    <div className="min-h-screen bg-main">
      <section className="min-h-screen bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-36 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <img className="w-8 h-8 mr-2" src={Profile} alt="logo" />
            Nzib
          </a>
          <div className="w-full bg-gray-800 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tightmd:text-2xl text-white">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="bg-gray-700 border border-gray-600 sm:text-sm rounded-lg focus:ring-primaryYellow2 focus:border-primaryYellow2 block w-full p-2.5  placeholder-gray-400 text-white"
                    placeholder="Email.."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-700 border border-gray-600  sm:text-sm rounded-lg focus:ring-primaryYellow2 focus:border-primaryYellow2 block w-full p-2.5  placeholder-gray-400 text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primaryYellow hover:bg-primaryYellow2 focus:ring-4 focus:outline-none focus:ring-primaryYellow font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  // onClick={() => setSignIn(true)}
                  onClick={handleAuth}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Login
