import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Activity,
  BarChart3,
  PieChart,
  Eye,
  Download,
  MoreVertical,
  ArrowUpRight,
  Calendar,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  RefreshCw,
  Maximize2,
  FileText,
  Settings,
  HelpCircle
} from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart
} from 'recharts'

// Mock data for charts
const revenueData = [
  { month: 'Jan', revenue: 65, target: 60, growth: 12 },
  { month: 'Feb', revenue: 59, target: 65, growth: 8 },
  { month: 'Mar', revenue: 80, target: 70, growth: 15 },
  { month: 'Apr', revenue: 81, target: 75, growth: 18 },
  { month: 'May', revenue: 56, target: 65, growth: 5 },
  { month: 'Jun', revenue: 55, target: 60, growth: 4 },
  { month: 'Jul', revenue: 70, target: 68, growth: 10 },
  { month: 'Aug', revenue: 85, target: 80, growth: 22 },
  { month: 'Sep', revenue: 90, target: 85, growth: 25 },
  { month: 'Oct', revenue: 75, target: 78, growth: 14 },
  { month: 'Nov', revenue: 80, target: 82, growth: 16 },
  { month: 'Dec', revenue: 95, target: 90, growth: 30 }
]

const salesData = [
  { category: 'Electronics', sales: 4000, growth: 12, marketShare: 30 },
  { category: 'Fashion', sales: 3000, growth: 8, marketShare: 22 },
  { category: 'Home', sales: 2000, growth: 15, marketShare: 18 },
  { category: 'Books', sales: 2780, growth: 6, marketShare: 15 },
  { category: 'Sports', sales: 1890, growth: 18, marketShare: 10 },
  { category: 'Others', sales: 2390, growth: 10, marketShare: 5 }
]

const trafficData = [
  { name: 'Direct', value: 35, color: '#3B82F6' },
  { name: 'Organic', value: 28, color: '#10B981' },
  { name: 'Social', value: 22, color: '#8B5CF6' },
  { name: 'Email', value: 15, color: '#F59E0B' }
]

const performanceData = [
  { subject: 'Speed', score: 90, fullMark: 100 },
  { subject: 'Reliability', score: 85, fullMark: 100 },
  { subject: 'Security', score: 95, fullMark: 100 },
  { subject: 'Uptime', score: 88, fullMark: 100 },
  { subject: 'Support', score: 82, fullMark: 100 },
  { subject: 'Features', score: 78, fullMark: 100 }
]

// Custom Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
        <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Stats Card Component
interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
  color: string
  bgColor: string
}

function StatsCard({ title, value, change, trend, icon, color, bgColor }: StatsCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900 group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-blue-400"></div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
            <div className="flex items-center gap-1 mt-2">
              {trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {change}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
            </div>
          </div>
          <div className={`p-3 rounded-lg ${bgColor} group-hover:scale-110 transition-transform duration-300`} style={{ color }}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Chart Card Component
function ChartCard({ 
  title, 
  description,
  children, 
  className = "", 
  action,
  fullWidth = false 
}: { 
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
  fullWidth?: boolean
}) {
  return (
    <Card className={`border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-1">{description}</CardDescription>
            )}
          </div>
          <div className="flex items-center gap-2">
            {action || (
              <>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <RefreshCw className="h-3.5 w-3.5" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Maximize2 className="h-3.5 w-3.5" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className={fullWidth ? 'p-0' : ''}>
        {children}
      </CardContent>
    </Card>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="border-none bg-linear-to-r from-blue-600 to-blue-500 text-white overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome back, Admin! 👋</h2>
              <p className="text-blue-100">
                Your dashboard is updated with the latest metrics and insights. 
                <span className="font-semibold"> $12,450</span> revenue generated today.
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 gap-2">
                <Eye className="h-4 w-4" />
                View Insights
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$42,580"
          change="+18.2%"
          trend="up"
          icon={<DollarSign className="h-6 w-6" />}
          color="#3B82F6"
          bgColor="bg-blue-100 dark:bg-blue-900/30"
        />
        <StatsCard
          title="Total Sales"
          value="3,245"
          change="+12.5%"
          trend="up"
          icon={<ShoppingCart className="h-6 w-6" />}
          color="#8B5CF6"
          bgColor="bg-purple-100 dark:bg-purple-900/30"
        />
        <StatsCard
          title="Active Users"
          value="12,847"
          change="+8.3%"
          trend="up"
          icon={<Users className="h-6 w-6" />}
          color="#10B981"
          bgColor="bg-green-100 dark:bg-green-900/30"
        />
        <StatsCard
          title="Conversion Rate"
          value="4.35%"
          change="-1.2%"
          trend="down"
          icon={<Target className="h-6 w-6" />}
          color="#F59E0B"
          bgColor="bg-amber-100 dark:bg-amber-900/30"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <ChartCard 
          title="Revenue Overview" 
          description="Monthly revenue performance vs targets"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280' }}
                  tickFormatter={(value) => `$${value}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="revenue" 
                  name="Revenue" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  name="Target" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Sales Distribution Chart */}
        <ChartCard 
          title="Sales Distribution" 
          description="Category-wise sales performance"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                <XAxis 
                  dataKey="category" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  formatter={(value) => [`$${value}`, 'Sales']}
                />
                <Bar 
                  dataKey="sales" 
                  name="Sales Amount" 
                  radius={[4, 4, 0, 0]}
                >
                  {salesData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index % 2 === 0 ? '#3B82F6' : '#8B5CF6'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Additional Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Sources Pie Chart */}
        <ChartCard title="Traffic Sources">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  content={<CustomTooltip />}
                  formatter={(value) => [`${value}%`, 'Share']}
                />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Performance Radar Chart */}
        <ChartCard title="Performance Metrics">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={performanceData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#6B7280' }}
                />
                <PolarRadiusAxis 
                  angle={30} 
                  domain={[0, 100]}
                  tick={{ fill: '#6B7280' }}
                />
                <Radar
                  name="Performance"
                  dataKey="score"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.6}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Growth Trend Chart */}
        <ChartCard title="Growth Trend">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="growth" 
                  name="Growth %" 
                  stroke="#10B981" 
                  fill="#10B981" 
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Full Width Chart */}
      <ChartCard 
        title="Detailed Analytics" 
        description="Comprehensive view of all metrics"
        fullWidth
      >
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="month" 
                scale="band"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280' }}
                tickFormatter={(value) => `$${value}k`}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                yAxisId="left"
                dataKey="revenue" 
                name="Revenue" 
                fill="#3B82F6" 
                radius={[4, 4, 0, 0]}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="target" 
                name="Target" 
                stroke="#8B5CF6" 
                strokeWidth={2}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="growth" 
                name="Growth %" 
                stroke="#10B981" 
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* Recent Activity & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </CardTitle>
              <Button variant="ghost" size="sm" className="h-8 text-blue-600">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "John Doe", action: "made a purchase", time: "2 min ago", amount: "$250", type: "purchase" },
                { user: "Sarah Smith", action: "subscribed to premium", time: "15 min ago", amount: "$499", type: "subscription" },
                { user: "Mike Johnson", action: "updated profile", time: "1 hour ago", amount: "", type: "update" },
                { user: "Emma Wilson", action: "cancelled subscription", time: "2 hours ago", amount: "", type: "cancel" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'purchase' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' :
                    activity.type === 'subscription' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' :
                    activity.type === 'cancel' ? 'bg-red-100 dark:bg-red-900/30 text-red-600' :
                    'bg-gray-100 dark:bg-gray-800 text-gray-600'
                  }`}>
                    {activity.type === 'purchase' ? <ShoppingCart className="h-4 w-4" /> :
                     activity.type === 'subscription' ? <CheckCircle className="h-4 w-4" /> :
                     activity.type === 'cancel' ? <AlertCircle className="h-4 w-4" /> :
                     <Users className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{activity.user}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.action}</p>
                  </div>
                  <div className="text-right">
                    {activity.amount && (
                      <p className="font-semibold text-green-600">{activity.amount}</p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
              System Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { metric: "Server Uptime", value: "99.9%", status: "excellent", color: "bg-green-500", width: 99 },
                { metric: "Page Load", value: "1.2s", status: "good", color: "bg-blue-500", width: 85 },
                { metric: "API Response", value: "180ms", status: "good", color: "bg-blue-500", width: 90 },
                { metric: "Error Rate", value: "0.8%", status: "warning", color: "bg-amber-500", width: 92 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item.metric}</span>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.width}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Target: {item.status === 'excellent' ? '99.5%' : item.status === 'good' ? '2s/500ms' : '1%'}</span>
                    <span className="capitalize">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Generate Report", icon: <FileText className="h-4 w-4" />, color: "bg-blue-500" },
                { label: "Add User", icon: <Users className="h-4 w-4" />, color: "bg-green-500" },
                { label: "New Order", icon: <ShoppingCart className="h-4 w-4" />, color: "bg-purple-500" },
                { label: "Settings", icon: <Settings className="h-4 w-4" />, color: "bg-amber-500" },
                { label: "Analytics", icon: <BarChart3 className="h-4 w-4" />, color: "bg-indigo-500" },
                { label: "Help", icon: <HelpCircle className="h-4 w-4" />, color: "bg-pink-500" },
              ].map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {action.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}