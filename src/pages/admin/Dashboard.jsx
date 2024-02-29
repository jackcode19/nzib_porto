import React from "react"
import LayoutAdmin from "../../components/admin/layout/LayoutAdmin"
function Dashboard({ user }) {
  return (
    <LayoutAdmin user={user}>
      <div className="">
        <div id="gallery" className="w-full px-4 pb-28 pt-16">
          <div className="max-w-full text-center mx-auto mb-10">
            <h2 className="text-4xl sm:text-6xl text-slate-100 font-pixelF">
              Dashboard Page
            </h2>
          </div>
          <div className="w-full px-4 mb-10">
            <div className="">
              <div className="max-w-full mx-auto">
                <div className="flex flex-wrap justify-center item-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}
export default Dashboard
