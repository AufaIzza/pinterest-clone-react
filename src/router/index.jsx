import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages/index/index"
import Ideas from "../pages/ideas/index"
import Videos from "../pages/videos/index"
import Today from "../pages/today/index"

const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>
    },
    {
      path: "/ideas",
      element: <Ideas/>
    },
    {
      path: "/watch",
      element: <Videos/>
    },
    {
      path: "/today",
      element: <Today/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default index
