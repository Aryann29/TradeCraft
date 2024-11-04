import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchUserPortfolio } from '../redux/features/userPortfolio/userPortfolioSlice';

export default function PortfolioOverview() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.userPortfolio);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserPortfolio());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="text-neutral-900 dark:text-neutral-100">Loading portfolio...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-600 dark:text-red-400">Error: {error}</div>;
  }

  if (!data) {
    return <div className="text-neutral-600 dark:text-neutral-400">No portfolio data available.</div>;
  }

  return (
    <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <CardHeader>
        <CardTitle className="text-neutral-900 dark:text-neutral-100">Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Value</p>
            <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              ₹{data.totalValue.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Today's Change</p>
            <p className={`text-lg font-semibold ${
              data.todayChange >= 0 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              ₹{data.todayChange.toLocaleString()} ({data.todayChangePercentage}%)
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}