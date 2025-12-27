import { Navigate } from "react-router-dom"
import { useAuthStore } from "@/store/useAuthStore"
import type { JSX } from "react"

export default function ProtectedRoute({
    children,
}: {
    children: JSX.Element
}) { 
    // Comment here to bypass authentication
    const user = useAuthStore((state) => state.user)

    if (!user) {
        return <Navigate to="/login" replace />
    }

    //   

    return children
}
