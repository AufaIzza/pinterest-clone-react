import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages/index/index"
import Ideas from "../pages/ideas/index"

const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>
    },
    {
      path: "/ideas",
      element: <Ideas/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default index
