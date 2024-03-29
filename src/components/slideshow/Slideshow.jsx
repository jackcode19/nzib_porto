import { useState, useContext, useEffect } from "react"
import myContext from "../../context/data/MyContext"
import Pagination from "../../components/pagination/Pagination"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import "react-lazy-load-image-component/src/effects/opacity.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"

function Slideshow() {
  const context = useContext(myContext)
  const { dataFilterCategory } = context
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = dataFilterCategory.slice(firstPostIndex, lastPostIndex)

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(currentPosts.length)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === currentPosts.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="">
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            fontSize={28}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            fontSize={28}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            fontSize={28}
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <img src={currentPosts[slideNumber].imageUrl} alt="" />
          </div>
        </div>
      )}

      {/* Filter By Category */}
      <div className="flex flex-wrap justify-center item-center">
        {currentPosts.map(
          (item, idx) =>
            idx < 5 && (
              <div key={idx} className="md:w-1/2 lg:w-1/3 p-2">
                <div key={idx} className="flex relative">
                  <LazyLoadImage
                    // <img
                    src={item.imageUrl}
                    className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                    onClick={() => handleOpenModal(idx)}
                    loading="eager"
                    effect="blur"
                    key={idx}
                  />
                </div>
              </div>
            )
        )}
      </div>
      <div className="mt-10">
        <Pagination
          totalPosts={dataFilterCategory.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}
export default Slideshow
