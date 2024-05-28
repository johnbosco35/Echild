import { Outlet } from "react-router-dom"
import { Footer, Header } from "../Components/Blocks"

const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout