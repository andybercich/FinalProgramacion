import { Route, Routes } from "react-router-dom"
import { Home } from "../Components/Screens/Home/Home"
import { Admin } from "../Components/Screens/Admin/Admin"

export const AppRouter = () => {



  return (
    <Routes>
        <Route path="/" element= { <Home/>}>thsrg</Route>
        <Route path="/admin" element={<Admin/>} />
    </Routes>
  )
}
