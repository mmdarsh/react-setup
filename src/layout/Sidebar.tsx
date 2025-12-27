import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  CreditCard,
  FileText,
  MessageSquare,
  Calendar,
  HelpCircle,
  Lock,
  Bell,
  Package,
  Database,
  Shield,
  Globe,
  FileBarChart,
  Smartphone,
  Mail,
  FileCheck,
  Server,
  Cloud,
  Cpu,
  Zap,
  PieChart,
//   LineChart
} from "lucide-react"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const mainMenu = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Users", icon: Users, path: "/users" },
  { label: "Analytics", icon: BarChart3, path: "/analytics" },
  { label: "E-commerce", icon: ShoppingCart, path: "/ecommerce" },
  { label: "Products", icon: Package, path: "/products" },
  { label: "Orders", icon: FileCheck, path: "/orders" },
  { label: "Invoices", icon: FileText, path: "/invoices" },
  { label: "Calendar", icon: Calendar, path: "/calendar" },
  { label: "Messages", icon: MessageSquare, path: "/messages" },
  { label: "Email", icon: Mail, path: "/email" },
  { label: "CRM", icon: Database, path: "/crm" },
  { label: "Reports", icon: FileBarChart, path: "/reports" },
  { label: "Charts", icon: PieChart, path: "/charts" },
  { label: "Maps", icon: Globe, path: "/maps" },
  { label: "Mobile", icon: Smartphone, path: "/mobile" },
]

const settingsMenu = [
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Security", icon: Shield, path: "/security" },
  { label: "Billing", icon: CreditCard, path: "/billing" },
  { label: "API", icon: Server, path: "/api" },
  { label: "Cloud", icon: Cloud, path: "/cloud" },
  { label: "System", icon: Cpu, path: "/system" },
  { label: "Help", icon: HelpCircle, path: "/help" },
]

export default function Sidebar() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)

  return (
    <aside className={`hidden md:flex flex-col border-r bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 ${isMenuCollapsed ? 'w-20' : 'w-64'}`}>
      
      {/* Logo */}
      <div className="h-20 flex items-center justify-between px-6 border-b">
        {!isMenuCollapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-blue-400 flex items-center justify-center">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                VelzonPro
              </h1>
              <p className="text-xs text-muted-foreground">Premium Dashboard</p>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-blue-400 flex items-center justify-center mx-auto">
            <Zap className="h-6 w-6 text-white" />
          </div>
        )}
        
        <button 
          onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
          className={`p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isMenuCollapsed ? 'ml-auto' : ''}`}
        >
          <div className="w-4 h-4 flex flex-col justify-center gap-0.5">
            <div className="h-0.5 bg-gray-400 w-full"></div>
            <div className="h-0.5 bg-gray-400 w-full"></div>
            <div className="h-0.5 bg-gray-400 w-full"></div>
          </div>
        </button>
      </div>

      {/* Stats - Only show when expanded */}
      {!isMenuCollapsed && (
        <div className="px-6 py-4 border-b">
          <div className="p-3 rounded-lg bg-linear-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Revenue</span>
              <span className="text-xs font-bold text-green-600">+18%</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">$42.5k</h3>
            <p className="text-xs text-muted-foreground mt-1">Monthly target</p>
          </div>
        </div>
      )}

      {/* Scrollable Main Menu */}
      <div className="flex-1 overflow-hidden">
        <nav className="h-full flex flex-col">
          {!isMenuCollapsed && (
            <p className="px-3 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Main Menu
            </p>
          )}
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="px-3 pb-4 space-y-1">
              {mainMenu.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all duration-200 group
                     ${
                       isActive
                         ? "bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-sm"
                         : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                     }
                     ${isMenuCollapsed ? 'justify-center' : ''}`
                  }
                  title={isMenuCollapsed ? item.label : undefined}
                >
                  <item.icon size={18} />
                  {!isMenuCollapsed && item.label}
                  {isMenuCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Scrollable Settings Menu */}
      <div className="border-t">
        <div className="overflow-hidden">
          {!isMenuCollapsed && (
            <p className="px-3 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Settings
            </p>
          )}
          
          <div className="overflow-y-auto custom-scrollbar max-h-48">
            <div className="px-3 pb-4 space-y-1">
              {settingsMenu.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition
                     ${
                       isActive
                         ? "bg-muted font-medium text-primary"
                         : "text-muted-foreground hover:bg-muted"
                     }
                     ${isMenuCollapsed ? 'justify-center' : ''}`
                  }
                  title={isMenuCollapsed ? item.label : undefined}
                >
                  <item.icon size={18} />
                  {!isMenuCollapsed && item.label}
                  {isMenuCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t">
        <div className={`flex items-center gap-3 ${isMenuCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
            <span className="font-bold text-white">A</span>
          </div>
          
          {!isMenuCollapsed && (
            <>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold truncate">Admin User</h4>
                <p className="text-xs text-muted-foreground truncate">admin@example.com</p>
              </div>
              <Bell className="h-5 w-5 text-muted-foreground shrink-0" />
            </>
          )}
          
          {isMenuCollapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              <div>Admin User</div>
              <div className="text-gray-300">admin@example.com</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}