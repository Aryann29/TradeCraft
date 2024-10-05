import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Watchlist() {
  const { data } = useSelector((state) => state.userPortfolio);

  if (!data || !data.watchlist) {
    return null; // or a loading state
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Watchlist</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[195px]">
          <div className="space-y-2">
            {data.watchlist.map((stock) => (
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
  );
}