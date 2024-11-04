import { ArrowUp, ArrowDown } from "lucide-react"
import { CardTitle, CardDescription } from "@/components/ui/card"

export const PriceHeader = ({ symbol, name, price, change, changePercent }) => {
  const isPositive = change > 0
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
      <div>
        <CardTitle className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          {name} ({symbol})
        </CardTitle>
        <CardDescription className="text-neutral-500 dark:text-neutral-400">
          NASDAQ: {symbol}
        </CardDescription>
      </div>
      <div className="text-right w-full sm:w-auto">
        <div className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          ${price.toFixed(2)}
        </div>
        <div className={`flex items-center justify-end ${
          isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}>
          {isPositive ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
          {Math.abs(change).toFixed(2)} ({Math.abs(changePercent).toFixed(2)}%)
        </div>
      </div>
    </div>
  )
}