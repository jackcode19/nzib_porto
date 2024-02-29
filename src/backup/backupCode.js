// =============================  Filter Page =============================== 
      {/* Multi Filter */ }
      {/* <ul className="list-none text-slate-100 flex justify-center items-center ">
         {categoryArray.map(({ category, idx }) => (
         <li
            className={`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 capitalize hover:bg-primaryYellow} ${
               selectedFilters?.includes(category) ? "active-tabs" : ""
            }
            `}
            onClick={() => handleFilterButtonClick(category)}
            // key={`categoryArray-${idx}`}
            key={idx}
         >
            {category}
         </li>
         ))}
      </ul> */}


      {/* Filter Select Category */ }          
      {/* <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 w-full rounded-md bg-main border text-slate-100  border-gray-700 outline-0 focus:border-gray-700 focus:bg-main focus:ring-0 text-sm"
            >
            {categoryCount.map((item, index) => {
               return (
                  <option className="capitalize" value={item.category} key={index}>
                  {item.category}
                  </option>
               )
            })}
      </select> */}

// =============================  Slideshow Page =============================== 

      {/* Multi Filter */}

      {/* <div className="flex flex-wrap justify-center item-center">
        {filteredItems.map((item, idx) => (
          <div className="md:w-1/2 lg:w-1/3 p-2">
            <div className="flex relative">
              <img
                key={`portfolio-${idx}`}
                src={item.imageUrl}
                onClick={() => handleOpenModal(index)}
                className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div> */}

      {/* Filter Selected */}

      {/* <div className="flex flex-wrap justify-center item-center">
        {portfolio
          .filter((obj) => obj.category.toLowerCase().includes(filterType))
          .map((item, index) => {
            return (
              <div className="md:w-1/2 lg:w-1/3 p-2">
                <div className="flex relative">
                  <img
                    key={index}
                    src={item.imageUrl}
                    onClick={() => handleOpenModal(index)}
                    className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                  />
                </div>
              </div>
            )
          })}
      </div> */}


// =============================  Slideshow Next Prev ===============================
      
      // Previous Image
      //   const prevSlide = () => {
      //     slideNumber === 0
      //       ? setSlideNumber(
      //           portfolio.filter((filter) => filter.category.includes(filterType))
      //             .length - 1
      //         )
      //       : setSlideNumber(slideNumber - 1)
      //   }

      //   // Next Image
      //   const nextSlide = () => {
      //     slideNumber + 1 === portfolio.filter((filter) => filter.category.includes(filterType)).length
      //       ?
      //         setSlideNumber(0)
      //       : setSlideNumber(slideNumber + 1)
      //   }

      // =============================  Fecth data from Firebase ===============================

      // Todos
      // const [todo, setTodo] = useState("")
      // const [todos, setTodos] = useState([])

      // const fetchPost = async () => {
      //   await getDocs(collection(dataDb, "Collection")).then((querySnapshot) => {
      //     const newData = querySnapshot.docs.map((doc) => ({
      //       ...doc.data(),
      //       id: doc.id,
      //     }))
      //     setTodos(newData)
      //     console.log(todos, newData)
      //   })
      // }

      // useEffect(() => {
      //   fetchPost()
// }, [])
      
// const [loading, setLoading] = useState(false)
//   const [portfolio, setPortfolio] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const [lastVisible, setLastVisible] = useState(null)
//   const [noOfPages, setNoOfPages] = useState(null)
//   const [count, setCount] = useState(null)

//   useEffect(() => {
//     getPortfolioData()
//     getTotalPortfolio()
//     // setActive("blogs")
//   }, [])

//   console.log(portfolio)

//   const getPortfolioData = async () => {
//     setLoading(true)
//     const blogRef = collection(dataDb, "collection")
//     const first = query(blogRef, orderBy("category"), limit(2))
//     const docSnapshot = await getDocs(first)
//     setPortfolio(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
//     setCount(docSnapshot.size)
//     setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1])
//     setLoading(false)
//   }

//   const getTotalPortfolio = async () => {
//     const blogRef = collection(dataDb, "collection")
//     const docSnapshot = await getDocs(blogRef)
//     const totalBlogs = docSnapshot.size
//     const totalPage = Math.ceil(totalBlogs / 4)
//     setNoOfPages(totalPage)
//   }

//   const fetchMore = async () => {
//     setLoading(true)
//     const blogRef = collection(dataDb, "collection")
//     const nextBlogsQuery = query(
//       blogRef,
//       orderBy("category"),
//       startAfter(lastVisible),
//       limit(3)
//     )
//     const nextBlogsSnaphot = await getDocs(nextBlogsQuery)
//     setPortfolio(
//       nextBlogsSnaphot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//     )
//     setCount(nextBlogsSnaphot.size)
//     setLastVisible(nextBlogsSnaphot.docs[nextBlogsSnaphot.docs.length - 1])
//     setLoading(false)
//   }
//   const fetchPrev = async () => {
//     setLoading(true)
//     const blogRef = collection(dataDb, "collection")
//     const end =
//       noOfPages !== currentPage ? endAt(lastVisible) : endBefore(lastVisible)
//     const limitData =
//       noOfPages !== currentPage
//         ? limit(2)
//         : count <= 2 && noOfPages % 2 === 0
//         ? limit(2)
//         : limitToLast(2)
//     const prevBlogsQuery = query(blogRef, orderBy("category"), end, limitData)
//     const prevBlogsSnaphot = await getDocs(prevBlogsQuery)
//     setPortfolio(
//       prevBlogsSnaphot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//     )
//     setCount(prevBlogsSnaphot.size)
//     setLastVisible(prevBlogsSnaphot.docs[prevBlogsSnaphot.docs.length - 1])
//     setLoading(false)
//   }

//   const handlePageChange = (value) => {
//     if (value === "Next") {
//       setCurrentPage((page) => page + 1)
//       fetchMore()
//     } else if (value === "Prev") {
//       setCurrentPage((page) => page - 1)
//       fetchPrev()
//     }
//   }

//   const [dataFilterCategory, setDataCategory] = useState(portfolio)

//   const filterResult = (categoryItem) => {
//     const result = portfolio.filter((curData) => {
//       return curData.category === categoryItem
//     })
//     setDataCategory(result)
//   }


  // Multi Filter Category

  // const [selectedFilters, setSelectedFilters] = useState([])
  // const [filteredItems, setFilteredItems] = useState(portfolio)

  // const handleFilterButtonClick = (selectedCategory) => {
  //   if (selectedFilters.includes(selectedCategory)) {
  //     let categoryArray = selectedFilters.filter(
  //       (el) => el !== selectedCategory
  //     )
  //     setSelectedFilters(categoryArray)
  //   } else {
  //     setSelectedFilters([...selectedFilters, selectedCategory])
  //   }
  // }

  // useEffect(() => {
  //   filterItems()
  // }, [selectedFilters])

  // const filterItems = () => {
  //   if (selectedFilters.length > 0) {
  //     let tempItems = selectedFilters.map((selectedCategory) => {
  //       let temp = portfolio.filter(
  //         (item) => item.category === selectedCategory
  //       )
  //       return temp
  //     })
  //     setFilteredItems(tempItems.flat())
  //   } else {
  //     setFilteredItems([...portfolio])
  //   }
  // }
