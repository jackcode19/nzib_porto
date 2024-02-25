import React from "react"
import Aside from "../aside/Aside"

function LayoutAdmin({ children, user }) {
  return (
    <div className="min-h-screen bg-main">
      <Aside user={user} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default LayoutAdmin
