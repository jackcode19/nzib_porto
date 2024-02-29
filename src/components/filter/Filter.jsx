import React, { useContext, useEffect, useState } from "react"
import myContext from "../../context/data/MyContext"
function Filter({ active }) {
  const context = useContext(myContext)
  const { portfolio, categoryArray, filterResult } = context

  // console.log(filterResult)

  return (
    // <div className="px-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 "></div>
    <div className="px-4 mt-4 ">
      <div className="mx-auto md:py-4 mb-4">
        <ul className="list-none text-slate-100 flex justify-center items-center ">
          {categoryArray.map(({ category, idx }) => (
            <li
              className={`bg-tranparent px-6 py-2 border border-primaryYellow text-primaryYellow mt-5 hover:bg-primaryYellow hover:text-dark font-semibold rounded-sm shadow-lg cursor-pointer text-sm mr-2 capitalize `}
              onClick={() => filterResult(category)}
              // key={`categoryArray-${idx}`}
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Filter
