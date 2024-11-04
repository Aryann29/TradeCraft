import { Separator } from "@/components/ui/separator"

export const OrderBook = ({ bids, asks }) => {
  return (
    <div>
      <div className="flex justify-between mb-2 text-sm sm:text-base">
        <div className="font-semibold text-neutral-900 dark:text-neutral-100">Price</div>
        <div className="font-semibold text-neutral-900 dark:text-neutral-100">Size</div>
      </div>
      <div className="space-y-1">
        {asks.slice().reverse().map((ask, index) => (
          <div key={index} className="flex justify-between text-red-600 dark:text-red-400 text-sm sm:text-base">
            <div>{ask.price.toFixed(2)}</div>
            <div>{ask.size}</div>
          </div>
        ))}
        <Separator className="my-2 bg-neutral-200 dark:bg-neutral-800" />
        {bids.map((bid, index) => (
          <div key={index} className="flex justify-between text-green-600 dark:text-green-400 text-sm sm:text-base">
            <div>{bid.price.toFixed(2)}</div>
            <div>{bid.size}</div>
          </div>
        ))}
      </div>
    </div>
  )
}