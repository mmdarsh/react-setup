import { create } from "zustand"
import api from "@/lib/axios"

interface User {
  id: string
  email: string
  name?: string
}

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null

  login: (data: {
    email: string
    password: string
    rememberMe: boolean
  }) => Promise<void>

  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async ({ email, password, rememberMe }) => {
    try {
      set({ loading: true, error: null })
       
      // By pass login for development
      if(email === "admin@gmail.com" && password === "1111") {
        set({ user: { id: "1", email: "admin@gmail.com", name: "Admin" } })
        localStorage.setItem("accessToken", "1234567890")
        return
      }

      const res = await api.post("/auth/login", {
        email,
        password,
      })

      const { token, user } = res.data

      if (rememberMe) {
        localStorage.setItem("accessToken", token)
      } else {
        sessionStorage.setItem("accessToken", token)
      }

      set({ user })
    } catch (err: any) {
      set({
        error:
          err.response?.data?.message ||
          "Invalid email or password",
      })
    } finally {
      set({ loading: false })
    }
  },

  logout: () => {
    localStorage.removeItem("accessToken")
    sessionStorage.removeItem("accessToken")
    set({ user: null })
  },
}))
