import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to TradeCraft</h1>
        <p className="text-xl text-muted-foreground mb-8">Your gateway to smart trading and investment</p>
        <Button size="lg">Get Started</Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Real-Time Market Data</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Access up-to-the-minute market information to make informed decisions.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Advanced Trading Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Utilize cutting-edge tools and analytics to optimize your trading strategy.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Secure Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Trade with confidence knowing your transactions are protected by state-of-the-art security.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}