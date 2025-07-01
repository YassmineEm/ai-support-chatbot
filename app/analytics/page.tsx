"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Area,
  AreaChart,
} from "recharts"
import { TrendingUp, Clock, MessageSquare, ThumbsUp, Upload, FileText, BarChart3, Sparkles, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AnalyticsPage() {
  const [uploadedLogs, setUploadedLogs] = useState(false)

  // Mock data for charts
  const performanceData = [
    { metric: "Response Time", score: 85 },
    { metric: "Accuracy", score: 92 },
    { metric: "Satisfaction", score: 78 },
    { metric: "Resolution", score: 88 },
    { metric: "Empathy", score: 75 },
    { metric: "Professionalism", score: 90 },
  ]

  const monthlyData = [
    { month: "Jan", satisfaction: 75, resolution: 82, responseTime: 3.2 },
    { month: "Feb", satisfaction: 78, resolution: 85, responseTime: 2.8 },
    { month: "Mar", satisfaction: 82, resolution: 88, responseTime: 2.5 },
    { month: "Apr", satisfaction: 85, resolution: 90, responseTime: 2.2 },
    { month: "May", satisfaction: 88, resolution: 92, responseTime: 2.0 },
  ]

  const agentComparison = [
    { agent: "Agent A", satisfaction: 92, tickets: 145 },
    { agent: "Agent B", satisfaction: 88, tickets: 132 },
    { agent: "Agent C", satisfaction: 85, tickets: 128 },
    { agent: "Agent D", satisfaction: 90, tickets: 140 },
    { agent: "Agent E", satisfaction: 87, tickets: 135 },
  ]

  const improvements = [
    {
      category: "Response Time",
      current: 2.5,
      target: 2.0,
      suggestion: "Implement pre-formatted responses for frequently asked questions",
      priority: "high",
    },
    {
      category: "Resolution Rate",
      current: 88,
      target: 95,
      suggestion: "Enhance training on complex product features and troubleshooting",
      priority: "medium",
    },
    {
      category: "Customer Satisfaction",
      current: 85,
      target: 90,
      suggestion: "Focus on active listening skills and empathy development",
      priority: "high",
    },
  ]

  const handleUploadLogs = () => {
    setUploadedLogs(true)
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ai-bg via-ai-surface to-ai-blue-light/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center animate-slide-up">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-ai-blue to-ai-green text-white border-0 shadow-elegant">
            <BarChart3 className="w-4 h-4 mr-2" />
            Performance Analytics
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ai-text to-ai-blue bg-clip-text text-transparent mb-4">
            Analytics Dashboard
          </h1>
          <p className="text-xl text-ai-text-light max-w-3xl mx-auto">
            Analyze agent performance, identify improvement opportunities, and optimize your customer support
            operations.
          </p>
        </div>

        {/* Upload Section */}
        {!uploadedLogs ? (
          <Card className="mb-8 border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-ai-blue to-ai-green rounded-xl flex items-center justify-center shadow-elegant">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <span>Upload Conversation Logs</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Upload your conversation logs to generate comprehensive performance analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-ai-blue-light to-ai-green-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                  <FileText className="w-12 h-12 text-ai-blue" />
                </div>
                <h3 className="text-xl font-semibold text-ai-text mb-2">No conversation data uploaded</h3>
                <p className="text-ai-text-light mb-8 max-w-md mx-auto">
                  Upload your chat logs to unlock powerful analytics and performance insights
                </p>
                <Button
                  onClick={handleUploadLogs}
                  className="bg-gradient-to-r from-ai-blue to-ai-green hover:from-ai-blue/90 hover:to-ai-green/90 text-white px-8 py-3 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Conversation Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Avg Response Time",
                  value: "2.5 min",
                  change: "-12%",
                  icon: Clock,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  title: "Satisfaction Rate",
                  value: "85%",
                  change: "+5%",
                  icon: ThumbsUp,
                  color: "from-green-500 to-green-600",
                },
                {
                  title: "Tickets Resolved",
                  value: "1,247",
                  change: "+8%",
                  icon: MessageSquare,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  title: "Resolution Rate",
                  value: "88%",
                  change: "+3%",
                  icon: TrendingUp,
                  color: "from-orange-500 to-orange-600",
                },
              ].map((kpi, index) => {
                const Icon = kpi.icon
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-elegant bg-ai-surface/80 backdrop-blur-sm hover:shadow-elegant-lg transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-ai-text-light">{kpi.title}</CardTitle>
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${kpi.color} rounded-xl flex items-center justify-center shadow-elegant`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-ai-text mb-1">{kpi.value}</div>
                      <div className="flex items-center text-sm">
                        <TrendingUp className="inline w-4 h-4 mr-1 text-ai-green" />
                        <span className="text-ai-green font-medium">{kpi.change} this month</span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Radar Chart */}
              <Card
                className="border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-xl">
                    <Target className="w-5 h-5 text-ai-blue" />
                    <span>Overall Performance</span>
                  </CardTitle>
                  <CardDescription>Evaluation across 6 key performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={performanceData}>
                      <PolarGrid stroke="#E2E8F0" />
                      <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12, fill: "#4A5568" }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: "#4A5568" }} />
                      <Radar
                        name="Score"
                        dataKey="score"
                        stroke="#005CFF"
                        fill="#005CFF"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Bar Chart */}
              <Card
                className="border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-xl">
                    <BarChart3 className="w-5 h-5 text-ai-green" />
                    <span>Agent Comparison</span>
                  </CardTitle>
                  <CardDescription>Customer satisfaction scores by agent</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={agentComparison}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="agent" tick={{ fontSize: 12, fill: "#4A5568" }} />
                      <YAxis tick={{ fontSize: 12, fill: "#4A5568" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #E2E8F0",
                          borderRadius: "12px",
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Bar dataKey="satisfaction" fill="url(#greenGradient)" radius={[4, 4, 0, 0]} />
                      <defs>
                        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00B894" />
                          <stop offset="100%" stopColor="#00B894" stopOpacity={0.8} />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Trend Chart */}
            <Card
              className="mb-8 border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <TrendingUp className="w-5 h-5 text-ai-blue" />
                  <span>Monthly Trends</span>
                </CardTitle>
                <CardDescription>Key metrics evolution over the last 5 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={monthlyData}>
                    <defs>
                      <linearGradient id="satisfactionGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#005CFF" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#005CFF" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="resolutionGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00B894" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#00B894" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#4A5568" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#4A5568" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "12px",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="satisfaction"
                      stroke="#005CFF"
                      strokeWidth={3}
                      fill="url(#satisfactionGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="resolution"
                      stroke="#00B894"
                      strokeWidth={3}
                      fill="url(#resolutionGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Improvement Suggestions */}
            <Card
              className="border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Sparkles className="w-5 h-5 text-ai-blue" />
                  <span>AI-Powered Improvement Suggestions</span>
                </CardTitle>
                <CardDescription>Personalized recommendations based on performance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {improvements.map((item, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-gradient-to-br from-ai-bg to-ai-blue-light/20 rounded-2xl border border-ai-border/50 hover:shadow-elegant transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-semibold text-ai-text">{item.category}</h3>
                          <Badge
                            className={`${
                              item.priority === "high"
                                ? "bg-red-100 text-red-700 border-red-200"
                                : "bg-yellow-100 text-yellow-700 border-yellow-200"
                            } border`}
                          >
                            {item.priority} priority
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-ai-text-light">Current → Target</div>
                          <div className="font-semibold text-ai-text">
                            {item.current}
                            {typeof item.current === "number" && item.current < 10 ? " min" : "%"} → {item.target}
                            {typeof item.target === "number" && item.target < 10 ? " min" : "%"}
                          </div>
                        </div>
                      </div>
                      <Progress value={(item.current / item.target) * 100} className="mb-4 h-3 bg-ai-blue-light" />
                      <p className="text-ai-text-light leading-relaxed">{item.suggestion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
