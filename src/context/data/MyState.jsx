import React, { useEffect, useState, context, useMemo } from "react"
import MyContext from "./MyContext"
import {
  collection,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  endAt,
  endBefore,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  startAfter,
} from "firebase/firestore"
import { ref, deleteObject } from "firebase/storage"
import { dataDb, imagesDb } from "../../firebase/firebaseConfig"
import { toast } from "react-toastify"
import { Blurhash } from "react-blurhash"

function MyState(props) {
  // =============================  Get All Data Portfolio  ===============================
  const [portfolio, setPortfolio] = useState([])
  const [loading, setLoading] = useState(false)

  const getPortfolioData = async () => {
    setLoading(true)

    try {
      const q = query(collection(dataDb, "collection"))

      const data = onSnapshot(q, (QuerySnapshot) => {
        let portfolioArray = []
        QuerySnapshot.forEach((doc) => {
          portfolioArray.push({ ...doc.data(), id: doc.id })
        })
        setPortfolio(portfolioArray)
        setLoading(false)
      })

      return () => data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPortfolioData()
  }, [])

  // const fetchPost = async () => {
  //   await getDocs(collection(dataDb, "collection")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }))
  //     setPortfolio(newData)
  //     console.log(portfolio, newData)
  //   })
  // }

  // useEffect(() => {
  //   fetchPost()
  // }, [])

  // Category Count or List

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

  // =============================  Get data Include Filter By Category ===============================
  const [dataFilterCategory, setDataCategory] = useState(portfolio)

  const fetchPost = async () => {
    setLoading(true)
    await getDocs(collection(dataDb, "collection")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setDataCategory(newData)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  const [isloading, setIsLoading] = useState(true)

  const filterResult = (categoryItem) => {
    setIsLoading(true)
    const result = portfolio.filter((curData) => {
      return curData.category === categoryItem
    })
    setIsLoading(false)
    setDataCategory(result)
  }

  const deletePortfolio = async (item) => {
    setLoading(true)
    if (window.confirm("Yakin ingin dihapus?")) {
      try {
        await deleteDoc(doc(dataDb, "collection", item.id))
        toast.success("Portfolio Deleted successfully")
        const storageRef = ref(imagesDb, item.imageUrl)
        await deleteObject(storageRef)
        setLoading(false)
        window.location.reload(true)
        // getCollectionPortfolio()
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
  }

  // Filter
  const [filterType, setFilterType] = useState("")

  // Auth

  return (
    <MyContext.Provider
      value={{
        portfolio,
        filterType,
        setFilterType,
        categoryArray,
        dataFilterCategory,
        filterResult,
        deletePortfolio,
        loading,
        setLoading,
        isloading,
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
