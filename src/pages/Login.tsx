import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/store/useAuthStore"

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const navigate = useNavigate()
    const { login, loading, error } = useAuthStore()

    const handleLogin = async () => {
        // comment here for bypassing login
        await login({ email, password, rememberMe })
        navigate("/")
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            {/* LEFT BRAND SECTION - Velzon Style */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-linear-to-br from-primary to-primary/80 dark:from-primary/90 dark:to-primary text-white">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                            <Lock className="h-6 w-6" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight">Velzon<span className="text-primary-foreground/80">Pro</span></h1>
                    </div>

                    <div className="mt-16 lg:mt-24">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Advanced Dashboard
                            <br />
                            <span className="text-primary-foreground/90">Experience</span>
                        </h2>
                        <p className="text-primary-foreground/80 text-lg max-w-xl">
                            A premium admin panel with advanced analytics, real-time data tracking, and comprehensive management tools for modern businesses.
                        </p>
                    </div>

                    {/* Feature Points */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Real-time Analytics</h3>
                                <p className="text-sm text-primary-foreground/70">Live data tracking and insights</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Secure & Reliable</h3>
                                <p className="text-sm text-primary-foreground/70">Enterprise-grade security</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                    <p className="text-primary-foreground/70 text-sm">
                        © {new Date().getFullYear()} Velzon Dashboard. All rights reserved.
                    </p>
                </div>
            </div>

            {/* RIGHT LOGIN SECTION */}
            <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
                <Card className="w-full max-w-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-primary/70 to-primary"></div>

                    <CardHeader className="space-y-2 pt-8">
                        <div className="flex justify-center mb-2">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <Lock className="h-8 w-8 text-primary" />
                            </div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                            Welcome Back
                        </h2>
                        <p className="text-center text-muted-foreground">
                            Sign in to continue to your dashboard
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-6 pb-8">
                        {/* Email Input */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <Input
                                    id="email"
                                    placeholder="name@company.com"
                                    className="pl-10 h-12 rounded-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                                <button className="text-sm text-primary hover:underline font-medium">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <Lock className="h-5 w-5" />
                                </div>
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    className="pl-10 pr-10 h-12 rounded-lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Social Login */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="remember"
                                    checked={rememberMe}
                                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                                />
                                <Label htmlFor="remember" className="text-sm font-medium cursor-pointer">
                                    Remember me
                                </Label>
                            </div>
                        </div>

                        {/* Login Button */}
                        <Button
                            onClick={handleLogin}
                            disabled={loading}
                            className="w-full h-12 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </Button>

                        {/* Error Message */}
                        {error && (
                            <p className="text-sm text-red-500 text-center mt-2">
                                {error}
                            </p>
                        )}

                        {/* Divider */}
                        <div className="relative flex items-center justify-center my-6">
                            <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
                            <span className="shrink mx-4 text-sm text-muted-foreground">Or continue with</span>
                            <div className="grow border-t border-gray-200 dark:border-gray-700"></div>
                        </div>

                        {/* Social Login Options */}
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-12 rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                                    <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                                    <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.2749 6.60986C0.464904 8.22986 0 10.0599 0 11.9999C0 13.9399 0.464904 15.7699 1.2749 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                                    <path d="M12.0002 24.0001C15.2402 24.0001 17.9652 22.935 19.9452 21.095L16.0802 18.095C15.0052 18.82 13.6202 19.2501 12.0002 19.2501C8.87016 19.2501 6.21518 17.1401 5.26518 14.2951L1.27515 17.39C3.25515 21.31 7.31016 24.0001 12.0002 24.0001Z" fill="#34A853" />
                                </svg>
                                Google
                            </Button>
                            <Button variant="outline" className="h-12 rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </Button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center pt-4">
                            <p className="text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <button className="text-primary hover:underline font-semibold">
                                    Sign up
                                </button>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}