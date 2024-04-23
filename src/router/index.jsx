import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages/index/index"

const index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default index
