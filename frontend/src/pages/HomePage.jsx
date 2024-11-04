import React from 'react'
import PortfolioOverview from '@/components/PortfolioOverview';
import TopMovers from '@/components/TopMovers';
import MarketNews from '@/components/MarketNews';
import Watchlist from '@/components/Watchlist';

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

const userHoldings = {
  totalValue: 250000,
  todayChange: 3500,
  todayChangePercentage: 1.4,
}

const news = [
  { title: "Reliance Industries announces new green energy initiative", source: "Economic Times" },
  { title: "TCS wins major contract with European bank", source: "Business Standard" },
  { title: "HDFC Bank merger with HDFC Ltd nears completion", source: "Mint" },
  { title: "Infosys revises FY24 revenue guidance", source: "LiveMint" },
  { title: "ICICI Bank launches new digital banking platform", source: "Financial Express" },
]

export default function HomePage() {
  return (
    <div className=" mx-auto px-4 py-8 bg-white dark:bg-neutral-900">
      <h1 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Welcome, Trader!</h1>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {/* Main content area */}
        <div className="md:col-span-2 lg:col-span-3 space-y-6">
          <PortfolioOverview />
          <TopMovers />
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <MarketNews />
          <Watchlist />
        </div>
      </div>
    </div>
  );
}