import { Button } from "@/components/ui/button"
import { Sun, Moon, Search, Bell, HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <header className="h-20 border-b bg-white dark:bg-gray-900 flex items-center justify-between px-6">
      
      {/* Page Title & Breadcrumb */}
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <span>Home</span>
          <ChevronDown className="h-3 w-3 rotate-270" />
          <span className="text-primary font-medium">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l">
            <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="font-bold text-white text-sm">A</span>
            </div>
            <div className="hidden md:block">
              <h4 className="text-sm font-semibold">Admin</h4>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  )
}