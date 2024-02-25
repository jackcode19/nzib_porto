import { useState, useContext, useEffect } from "react"
import LayoutAdmin from "../../components/admin/layout/LayoutAdmin"
import Filter from "../../components/filter/Filter"
import Pagination from "../../components/pagination/Pagination"

import myContext from "../../context/data/MyContext"
function ListCollection({ user }) {
  const context = useContext(myContext)
  const { portfolio, dataFilterCategory, deletePortfolio } = context
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = dataFilterCategory.slice(firstPostIndex, lastPostIndex)

  return (
    <LayoutAdmin user={user}>
      <div className="">
        <div id="gallery" className="w-full px-4 pb-28 pt-32">
          <div className="max-w-full text-center mx-auto mb-10">
            <h2 className="text-4xl sm:text-6xl text-slate-100 font-pixelF">
              All Collection
            </h2>
          </div>
          <div className="md:py-4">
            <Filter />
          </div>

          <div className="w-full px-4 mb-10">
            <div className="">
              <div className="max-w-full mx-auto">
                {/* <h1 className="text-white text-xl md:text-2xl text-center mb-4">
                Scanes
              </h1> */}
                <div className="flex flex-wrap justify-center item-center">
                  {currentPosts.map((item, idx) => (
                    <div key={idx} className="md:w-1/3 lg:w-1/4 p-2">
                      <div key={idx} className="flex relative">
                        <img
                          src={item.imageUrl}
                          className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                          key={idx}
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-red-500 px-4 py-1 rounded-md text-white font-medium hover:bg-red-600 mt-3"
                        onClick={() => deletePortfolio(item)}
                      >
                        {/* <FontAwesomeIcon
                          name="trash"
                          style={{ margin: "3px", cursor: "pointer" }}
                          onClick={() => handleDelete(idx)}
                          icon={faTrash}
                        /> */}
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Pagination
            totalPosts={dataFilterCategory.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </LayoutAdmin>
  )
}
export default ListCollection
