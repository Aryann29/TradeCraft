export const KeyStatistics = ({ stats }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm sm:text-base">
        {Object.entries(stats).map(([label, value]) => (
          <div key={label}>
            <div className="text-neutral-500 dark:text-neutral-400">{label}</div>
            <div className="font-semibold text-neutral-900 dark:text-neutral-100">{value}</div>
          </div>
        ))}
      </div>
    )
  }