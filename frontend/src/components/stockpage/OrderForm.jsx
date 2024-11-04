import React from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const OrderForm = ({ side, onSubmit }) => {
  const [orderType, setOrderType] = React.useState("market")

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label className="text-neutral-900 dark:text-neutral-100">
          Order Type
        </Label>
        <Select defaultValue={orderType} onValueChange={setOrderType}>
          <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
            <SelectValue placeholder="Select order type" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
            <SelectItem value="market">Market</SelectItem>
            <SelectItem value="limit">Limit</SelectItem>
            <SelectItem value="stop">Stop</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {orderType !== "market" && (
        <div className="space-y-2">
          <Label className="text-neutral-900 dark:text-neutral-100">
            Price
          </Label>
          <Input 
            type="number" 
            placeholder="Enter price"
            className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
          />
        </div>
      )}
      <div className="space-y-2">
        <Label className="text-neutral-900 dark:text-neutral-100">
          Quantity
        </Label>
        <Input 
          type="number" 
          placeholder="Enter quantity"
          className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
        />
      </div>
      <Button 
        type="submit"
        className={`w-full ${
          side === "sell" 
            ? "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800" 
            : "bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900"
        }`}
      >
        Place {side.charAt(0).toUpperCase() + side.slice(1)} Order
      </Button>
    </form>
  )
}