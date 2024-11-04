import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export const StockChart = ({ data }) => {
  return (
    <div className="h-[300px] sm:h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="time"
            stroke="#666"
            className="text-sm"
          />
          <YAxis 
            domain={['dataMin - 10', 'dataMax + 10']}
            stroke="#666"
            className="text-sm"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--border)',
              borderRadius: '8px',
              color: '#666'
            }}
            labelStyle={{ color: '#666' }}
          />
          <Line 
            type="linear"
            dataKey="price" 
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}