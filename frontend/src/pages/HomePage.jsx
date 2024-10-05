import React from 'react'
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, BarChart2, Newspaper } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

// Mock data for stocks (unchanged)
const stocks = [
  { symbol: "RELIANCE", name: "Reliance Industries", change: 1.5 },
  { symbol: "TCS", name: "Tata Consultancy Services", change: -0.8 },
  { symbol: "HDFCBANK", name: "HDFC Bank", change: 0.5 },
  { symbol: "INFY", name: "Infosys", change: 2.1 },
  { symbol: "ICICIBANK", name: "ICICI Bank", change: -0.3 },
  { symbol: "SBIN", name: "State Bank of India", change: 1.2 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", change: -0.6 },
  { symbol: "ITC", name: "ITC Limited", change: 0.9 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", change: -0.4 },
  { symbol: "LT", name: "Larsen & Toubro", change: 1.7 },
]

// Mock data for user holdings (unchanged)
const userHoldings = {
  totalValue: 250000,
  todayChange: 3500,
  todayChangePercentage: 1.4,
}

// Mock data for news (unchanged)
const news = [
  { title: "Reliance Industries announces new green energy initiative", source: "Economic Times" },
  { title: "TCS wins major contract with European bank", source: "Business Standard" },
  { title: "HDFC Bank merger with HDFC Ltd nears completion", source: "Mint" },
  { title: "Infosys revises FY24 revenue guidance", source: "LiveMint" },
  { title: "ICICI Bank launches new digital banking platform", source: "Financial Express" },
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, Trader!</h1>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {/* Main content area */}
        <div className="md:col-span-2 lg:col-span-3 space-y-6">
          {/* Portfolio overview */}
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Holdings Value</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹{userHoldings.totalValue.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className={`flex items-center ${userHoldings.todayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {userHoldings.todayChange >= 0 ? <ArrowUpRight className="mr-1 h-4 w-4" /> : <ArrowDownRight className="mr-1 h-4 w-4" />}
                        ₹{Math.abs(userHoldings.todayChange).toLocaleString()} ({userHoldings.todayChangePercentage}%) today
                      </span>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Open Positions:</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pending Orders:</span>
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Watchlist Items:</span>
                      <span className="font-semibold">20</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Market Overview</CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Nifty 50:</span>
                      <span className="font-semibold text-green-600">19,564 (+0.8%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sensex:</span>
                      <span className="font-semibold text-green-600">65,721 (+0.7%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>India VIX:</span>
                      <span className="font-semibold text-red-600">12.34 (-5.2%)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Top Movers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Movers</CardTitle>
              <CardDescription>Stocks with significant price changes today</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stocks.slice(0, 5).map((stock) => (
                    <TableRow key={stock.symbol}>
                      <TableCell className="font-medium">{stock.symbol}</TableCell>
                      <TableCell>{stock.name}</TableCell>
                      <TableCell>
                        <span className={`flex items-center ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change >= 0 ? <ArrowUpRight className="mr-1 h-4 w-4" /> : <ArrowDownRight className="mr-1 h-4 w-4" />}
                          {Math.abs(stock.change)}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Trade</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          {/* Market News */}
          <Card>
            <CardHeader>
              <CardTitle>Market News</CardTitle>
              <CardDescription>Latest updates</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {news.map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="py-2">
                        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">Source: {item.source}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Watchlist or Additional Widget */}
          <Card>
            <CardHeader>
              <CardTitle>Watchlist</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {stocks.slice(5).map((stock) => (
                    <div key={stock.symbol} className="flex justify-between items-center">
                      <span className="font-medium">{stock.symbol}</span>
                      <span className={stock.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}