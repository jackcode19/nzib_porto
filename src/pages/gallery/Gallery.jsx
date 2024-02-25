import { useState, useContext, useEffect } from "react"
import Profile from "../../assets/img/profile.gif"
import Filter from "../../components/filter/Filter"
import myContext from "../../context/data/MyContext"
import Slideshow from "../../components/slideshow/Slideshow"

function Gallery() {
  const context = useContext(myContext)
  const { filterType, setFilterType } = context

  return (
    <div className="container mx-auto">
      <div id="gallery" className="w-full px-4 pb-28 pt-32">
        <div className="max-w-full text-center mx-auto mb-10">
          <h2 className="text-4xl sm:text-6xl text-slate-100 font-pixelF">
            Gallery
          </h2>
        </div>
        <div className="md:py-4">
          <Filter />
        </div>

        <div className="w-full px-4">
          <div className="">
            <div className="max-w-full mx-auto">
              {/* <h1 className="text-white text-xl md:text-2xl text-center mb-4">
                Scanes
              </h1> */}
              <Slideshow />
              {/* <div className="flex flex-wrap justify-center item-center">
                {portfolio
                  .filter((obj) => obj.category.includes(filterType))
                  .map((item, index) => {
                    const { imageUrl } = item
                    return (
                      <div className="md:w-1/2 lg:w-1/3 p-2">
                        <div className="flex relative">
                          <img
                            key={index}
                            src={item.imageUrl}
                            // onClick={() => handleOpenModal(index)}
                            className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                          />
                        </div>
                      </div>
                    )
                  })}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Gallery
