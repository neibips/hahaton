import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/shared/Layout.tsx";
import Home from "./pages/Home.tsx";
import Courses from "./pages/Courses.tsx";
import Planner from "./pages/Planner.tsx";

function App() {

  return (
      <Routes>
          <Route path={'/'} element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="courses" element={<Courses />} />
              <Route path="planner" element={<Planner />} />
          </Route>
      </Routes>
  )
}

export default App
