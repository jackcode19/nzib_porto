import React from "react"
import LayoutAdmin from "../../components/admin/layout/LayoutAdmin"
function Dashboard({ user }) {
  return (
    <LayoutAdmin user={user}>
      <div className="">Dashboard</div>
    </LayoutAdmin>
  )
}
export default Dashboard
