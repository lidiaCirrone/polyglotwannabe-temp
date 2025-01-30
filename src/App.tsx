import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Now from "./pages/Now"
import Layout from "./components/Layout"
import Projects from "./pages/Projects"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="now" element={<Now />} />
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
