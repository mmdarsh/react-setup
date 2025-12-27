import { Routes, Route } from "react-router-dom"
import Layout from "@/layout/Layout"
import Login from "@/pages/Login"
import Dashboard from "@/pages/Dashboard"
import ProtectedRoute from "./ProtectedRoute"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
