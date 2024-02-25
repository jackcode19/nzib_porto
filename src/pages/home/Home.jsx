import React, { useContext } from "react"
import Layout from "../../components/layout/Layout"
import Welcome from "../welcome/Welcome"
import Gallery from "../gallery/Gallery"
import About from "../about/About"
import Contact from "../contact/Contact"
import myContext from "../../context/data/MyContext"
function Home() {
  return (
    <Layout>
      <Welcome />
      <Gallery />
      <About />
      <Contact />
    </Layout>
  )
}
export default Home
