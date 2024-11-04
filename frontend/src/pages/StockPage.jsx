import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PriceHeader } from "@/components/stockpage/PriceHeader"
import { StockChart } from "@/components/stockpage/StockChart"
import { OrderBook } from "@/components/stockpage/OrderBook"
import { OrderForm } from "@/components/stockpage/OrderForm"
import { KeyStatistics } from "@/components/stockpage/KeyStatistics"

export default function StockPage() {
  const { ticker } = useParams();
  const { stocks } = useSelector((state) => state.stocks);
  

  const currentStock = stocks.find(
    (stock) => stock.symbol.toLowerCase() === ticker.toLowerCase()
  );


  if (!currentStock) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-semibold">Stock not found</h1>
      </div>
    );
  }

  const stockData = {
    symbol: currentStock.symbol,
    name: currentStock.name,
    price: currentStock.price,
    change: currentStock.change,
    changePercent: currentStock.change, 
    chartData: [

      { time: "Now", price: currentStock.price },
    ],
    orderBook: {
      bids: [
        { price: currentStock.price - 0.5, size: 100 },
        { price: currentStock.price - 1.0, size: 250 },
        { price: currentStock.price - 1.5, size: 500 },
        { price: currentStock.price - 2.0, size: 750 },
        { price: currentStock.price - 2.5, size: 1000 },
      ],
      asks: [
        { price: currentStock.price + 0.5, size: 150 },
        { price: currentStock.price + 1.0, size: 300 },
        { price: currentStock.price + 1.5, size: 450 },
        { price: currentStock.price + 2.0, size: 600 },
        { price: currentStock.price + 2.5, size: 750 },
      ],
    },
    stats: {
      "Market Cap": "N/A",
      "P/E Ratio": "N/A",
      "Dividend Yield": "N/A",
      "52 Week Range": "N/A"
    }
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault()
    // Handle order submission
  }

  return (
    <div className="container mx-auto p-2 sm:p-4 space-y-4 sm:space-y-6">
      <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
        <CardHeader>
          <PriceHeader {...stockData} />
        </CardHeader>
        <CardContent>
          <StockChart data={stockData.chartData} />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
          <CardHeader>
            <CardTitle className="text-neutral-900 dark:text-neutral-100">Order Book</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderBook {...stockData.orderBook} />
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
          <CardHeader>
            <CardTitle className="text-neutral-900 dark:text-neutral-100">Place Order</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-neutral-100 dark:bg-neutral-800">
                <TabsTrigger 
                  value="buy"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-900"
                >
                  Buy
                </TabsTrigger>
                <TabsTrigger 
                  value="sell"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-900"
                >
                  Sell
                </TabsTrigger>
              </TabsList>
              {["buy", "sell"].map((side) => (
                <TabsContent key={side} value={side}>
                  <OrderForm side={side} onSubmit={handleOrderSubmit} />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
        <CardHeader>
          <CardTitle className="text-neutral-900 dark:text-neutral-100">Key Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <KeyStatistics stats={stockData.stats} />
        </CardContent>
      </Card>
    </div>
  );
}