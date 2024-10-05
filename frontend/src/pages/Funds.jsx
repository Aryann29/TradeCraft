import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, BarChart2, PiggyBank } from "lucide-react";

const FundsPage = () => {
  
  const [accountData, setAccountData] = useState({
    initialBalance: 1000000,
    currentBalance: 1050000,
    totalProfit: 50000,
    profitPercentage: 5,
    availableFunds: 800000,
    investedAmount: 250000,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Funds Overview</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{accountData.currentBalance.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Initial balance: ₹{accountData.initialBalance.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit/Loss</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{accountData.totalProfit.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className={`flex items-center ${accountData.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {accountData.totalProfit >= 0 ? <ArrowUpRight className="mr-1 h-4 w-4" /> : <ArrowDownRight className="mr-1 h-4 w-4" />}
                {accountData.profitPercentage}% overall
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Funds</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{accountData.availableFunds.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Ready to invest
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Invested Amount</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{accountData.investedAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((accountData.investedAmount / accountData.currentBalance) * 100).toFixed(2)}% of total balance
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex space-x-4">
          <Button>Add More Funds</Button>
          
        </div>
      </div>
    </div>
  );
};

export default FundsPage;