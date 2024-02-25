import { useState, useContext, useEffect } from "react"
import myContext from "../context/data/MyContext"
import {
  collection,
  onSnapshot,
  endAt,
  endBefore,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore"
import Pagination from "./pagination/Pagination"
import { dataDb } from "../firebase/firebaseConfig"

function Test() {
  const [portfolio, setPortfolio] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(2)

  const getPortfolioData = async () => {
    try {
      const q = query(collection(dataDb, "collection"))

      const data = onSnapshot(q, (QuerySnapshot) => {
        let portfolioArray = []
        QuerySnapshot.forEach((doc) => {
          portfolioArray.push({ ...doc.data(), id: doc.id })
        })
        setPortfolio(portfolioArray)
      })

      return () => data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPortfolioData()
  }, [])

  const counts = portfolio.reduce((prevValue, currentValue) => {
    let name = currentValue.category
    if (!prevValue.hasOwnProperty(name)) {
      prevValue[name] = 0
    }
    prevValue[name]++

    return prevValue
  }, {})

  const categoryCount = Object.keys(counts).map((key) => {
    return {
      category: key,
    }
  })
  const categoryArray = Object.keys(categoryCount).map(
    (key) => categoryCount[key]
  )

  const [dataFilterCategory, setDataCategory] = useState(portfolio)
  const filterResult = (categoryItem) => {
    const result = portfolio.filter((curData) => {
      return curData.category === categoryItem
    })
    setDataCategory(result)
  }

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = dataFilterCategory.slice(firstPostIndex, lastPostIndex)

  console.log(dataFilterCategory.length)
  return (
    <div className="">
      <div className="px-4 mt-4 ">
        <div className="mx-auto md:py-4 mb-4">
          <ul className="list-none text-slate-100 flex justify-center items-center ">
            {categoryArray.map(({ category, idx }) => (
              <li
                className="bg-tranparent px-6 py-2 border border-primaryYellow text-primaryYellow mt-5 hover:bg-primaryYellow hover:text-white font-semibold rounded-sm shadow-lg cursor-pointer text-sm mr-2 capitalize"
                onClick={() => filterResult(category)}
                // key={`categoryArray-${idx}`}
                key={idx}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Filter By Category */}
      <div className="flex flex-wrap justify-center item-center">
        {currentPosts.map((item, idx) => (
          <div className="md:w-1/2 lg:w-1/3 p-2">
            <div className="flex relative">
              <img
                src={item.imageUrl}
                className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                onClick={() => handleOpenModal(idx)}
              />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPosts={dataFilterCategory.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}
export default Test
