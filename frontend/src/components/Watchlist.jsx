import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Watchlist() {
  const { data } = useSelector((state) => state.userPortfolio);

  if (!data || !data.watchlist) {
    return null;
  }

  return (
    <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Watchlist
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[195px] pr-4">
          <div className="space-y-3">
            {data.watchlist.map((stock) => (
              <div 
                key={stock.symbol} 
                className="flex justify-between items-center p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {stock.symbol}
                </span>
                <span className={`font-semibold ${
                  stock.change >= 0 
                    ? 'text-green-500 dark:text-green-400' 
                    : 'text-red-500 dark:text-red-400'
                }`}>
                  {stock.change >= 0 ? '+' : ''}{stock.change}%
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}