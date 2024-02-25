import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { auth } from "../../../firebase/firebaseConfig"
import { toast } from "react-toastify"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { HiMenuAlt4 } from "react-icons/hi"
function Aside({ user }) {
  // const [user, setUser] = useState("")
  const [dropdownUser, setDropdownUser] = React.useState(false)
  const [openSidebar, setOpenSidebar] = React.useState(false)
  const toogleClass = () => {
    setOpenSidebar(!openSidebar)
  }

  const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth).then(() => {
      // setUser(null)
      navigate("/login")
      toast.success("Logout successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    })
  }
  return (
    <div className="">
      <nav className="w-full bg-main border-b  border-gray-700 fixed top-0 z-50">
        <div className="px-3 py-3 lg:px-5">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                type="button"
                onClick={() => toogleClass(true)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <HiMenuAlt4
                  fontSize={20}
                  className="text-white cursor-pointer"
                />
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img
                  src="./src/assets/img/profile.webp"
                  className="h-8 me-3"
                  alt="nzib"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Nzib
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  {dropdownUser ? (
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      onClick={() => setDropdownUser(false)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="./src/assets/img/profile.webp"
                        alt="user photo"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      onClick={() => setDropdownUser(true)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="./src/assets/img/profile.webp"
                        alt="user photo"
                      />
                    </button>
                  )}
                </div>
                {dropdownUser && (
                  <div className="absolute w-52 z-10 my-4 text-base bottom-52 list-none bg-white divide-y rounded shadow divide-gray-600 right-0 top-full -translate-x-5">
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-white" role="none">
                        Admin
                      </p>
                      <p
                        className="text-sm font-medium truncate text-gray-300"
                        role="none"
                      >
                        {user?.email}
                        {/* zib@gmail.com */}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm  text-gray-300 hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                          onClick={handleLogout}
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          openSidebar ? "-translate-x-0" : "-translate-x-full"
        }  bg-main border-r sm:translate-x-0  border-gray-700`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-main ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/admin">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </a>
              </Link>
            </li>

            <li>
              <Link to="/admin-list-collection">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    List Collection
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admin-add-collection">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Add Collection</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
export default Aside
