import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {lazy} from "react";

const RefinedSearch = lazy(() => import('../Pages/RefinedSearch'))

const router = createBrowserRouter([
  {
    path:"/",
    element:<RefinedSearch/>
  }
])

const Router = () => {
  return(
    <RouterProvider router={router}/>
  )
}

export default Router