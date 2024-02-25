import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import "./page.css"

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  // Paginate
  // const [currentPage, setCurrentPage] = useState(1)
  // const [lastVisible, setLastVisible] = useState()
  // const [noOfPages, setNoOfPages] = useState(null)
  // const [count, setCount] = useState(null)

  // const fetchMore = async () => {
  //   setLoading(true)
  //   const portfolioRef = collection(dataDb, "collection")
  //   const nextPortfolioQuery = query(
  //     portfolioRef,
  //     orderBy("imageUrl"),
  //     startAfter(lastVisible),
  //     limit(4)
  //   )
  //   const nextPortfolioSnaphot = await getDocs(nextPortfolioQuery)
  //   setDataCategory(
  //     nextPortfolioSnaphot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  //   )
  //   setCount(nextPortfolioSnaphot.size)
  //   setLastVisible(
  //     nextPortfolioSnaphot.docs[nextPortfolioSnaphot.docs.length - 1]
  //   )
  //   setLoading(false)
  // }

  // const fetchPrev = async () => {
  //   setLoading(true)
  //   const portfolioRef = collection(dataDb, "collection")
  //   const end =
  //     noOfPages !== currentPage ? endAt(lastVisible) : endBefore(lastVisible)
  //   const limitData =
  //     noOfPages !== currentPage
  //       ? limit(4)
  //       : count <= 4 && noOfPages % 2 === 0
  //       ? limit(4)
  //       : limitToLast(4)
  //   const prevPortfolioQuery = query(portfolioRef, end, limitData)
  //   const prevPortfolioSnaphot = await getDocs(prevPortfolioQuery)
  //   setDataCategory(
  //     prevPortfolioSnaphot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  //   )
  //   setCount(prevPortfolioSnaphot.size)
  //   setLastVisible(
  //     prevPortfolioSnaphot.docs[prevPortfolioSnaphot.docs.length - 1]
  //   )
  //   setLoading(false)
  // }

  // const handlePageChange = (value) => {
  //   if (value === "Next") {
  //     setCurrentPage((page) => page + 1)
  //     fetchMore()
  //   } else if (value === "Prev") {
  //     setCurrentPage((page) => page - 1)
  //     fetchPrev()
  //   }
  // }

  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className="pagination">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page == currentPage ? "active" : ""}
            >
              {page}
            </button>
          )
        })}
      </div>
    </div>
  )
}
export default Pagination
