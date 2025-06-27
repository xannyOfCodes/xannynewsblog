import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import Health from "./pages/Health"
import Politics from "./pages/Politics"
import Sports from "./pages/Sports"
import Business from "./pages/Business"
import Arts from "./pages/Arts"
import Science from "./pages/Science"
import World from "./pages/World"
import About from "./pages/About"
import Contact from "./pages/Contact"


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/health" element={<Health/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/politics" element={<Politics/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/arts" element={<Arts/>}/>
        <Route path="/science" element={<Science/>}/>
        <Route path="/world" element={<World/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
