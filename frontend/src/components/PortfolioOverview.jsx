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
    return <div>Loading portfolio...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No portfolio data available.</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <p className="text-sm font-medium">Total Value</p>
            <p className="text-2xl font-bold">₹{data.totalValue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Today's Change</p>
            <p className={`text-lg font-semibold ${data.todayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ₹{data.todayChange.toLocaleString()} ({data.todayChangePercentage}%)
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}