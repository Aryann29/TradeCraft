import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function TopMovers() {
  const { stocks } = useSelector((state) => state.stocks);
  const navigate = useNavigate();
  
  const topMovers = stocks
    .slice()
    .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
    .slice(0, 8);

  const handleTradeClick = (symbol) => {
    navigate(`/stock/${symbol.toLowerCase()}`);
  };

  return (
    <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <CardHeader>
        <CardTitle className="text-neutral-900 dark:text-neutral-100">Top Movers</CardTitle>
        <CardDescription className="text-neutral-600 dark:text-neutral-400">
          Stocks with significant price changes today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-neutral-200 dark:border-neutral-800">
              <TableHead className="text-neutral-600 dark:text-neutral-400">Symbol</TableHead>
              <TableHead className="text-neutral-600 dark:text-neutral-400">Name</TableHead>
              <TableHead className="text-neutral-600 dark:text-neutral-400">Change</TableHead>
              <TableHead className="text-neutral-600 dark:text-neutral-400">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topMovers.map((stock) => (
              <TableRow 
                key={stock.symbol} 
                className="border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <TableCell className="font-medium text-neutral-900 dark:text-neutral-100">
                  {stock.symbol}
                </TableCell>
                <TableCell className="text-neutral-700 dark:text-neutral-300">
                  {stock.name}
                </TableCell>
                <TableCell>
                  <span className={`flex items-center ${
                    stock.change >= 0 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stock.change >= 0 ? (
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="mr-1 h-4 w-4" />
                    )}
                    {Math.abs(stock.change)}%
                  </span>
                </TableCell>
                <TableCell>
                  <Button 
                    onClick={() => handleTradeClick(stock.symbol)}
                    variant="outline" 
                    size="sm"
                    className="border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                  >
                    Trade
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}