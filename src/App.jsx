import { Outlet } from "react-router-dom"
import Nav from "./components/nav"

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default App