import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Settings from "../pages/Settings"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/settings" element={ <Settings /> } />
      </Routes>
    </Router>
  )
}

export default AppRoutes