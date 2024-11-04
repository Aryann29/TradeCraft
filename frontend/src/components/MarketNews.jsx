import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchNews } from '../redux/features/news/newsSlice';

export default function MarketNews() {
  const dispatch = useDispatch();
  const { news, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="text-neutral-900 dark:text-neutral-100">Loading news...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-600 dark:text-red-400">Error: {error}</div>;
  }

  return (
    <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <CardHeader>
        <CardTitle className="text-neutral-900 dark:text-neutral-100">Market News</CardTitle>
        <CardDescription className="text-neutral-600 dark:text-neutral-400">Latest updates</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {news.length > 0 ? (
              news.map((item, index) => (
                <Card key={index} className="border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                  <CardHeader className="py-2">
                    <CardTitle className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      Source: {item.source}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-neutral-600 dark:text-neutral-400">No news available at the moment.</p>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}