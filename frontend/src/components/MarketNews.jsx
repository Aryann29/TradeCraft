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
    return <div>Loading news...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market News</CardTitle>
        <CardDescription>Latest updates</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {news.length > 0 ? (
              news.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="py-2">
                    <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Source: {item.source}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No news available at the moment.</p>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}