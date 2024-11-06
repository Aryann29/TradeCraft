import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Lock, Zap, Users, Globe, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16 bg-neutral-900 text-neutral-400">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-neutral-200">Welcome to TradeCraft</h1>
        <p className="text-xl text-neutral-500 mb-8">Your gateway to smart trading and investment</p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-neutral-700 hover:bg-neutral-600 text-neutral-200">Get Started</Button>
          <Button size="lg" variant="outline" className="text-neutral-400 border-neutral-600 hover:bg-neutral-600 hover:text-neutral-200">Learn More</Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <FeatureCard
          icon={<BarChart2 className="h-10 w-10 mb-4 text-neutral-400" />}
          title="Real-Time Market Data"
          description="Access up-to-the-minute market information to make informed decisions."
        />
        <FeatureCard
          icon={<Zap className="h-10 w-10 mb-4 text-neutral-400" />}
          title="Advanced Trading Tools"
          description="Utilize cutting-edge tools and analytics to optimize your trading strategy."
        />
        <FeatureCard
          icon={<Lock className="h-10 w-10 mb-4 text-neutral-400" />}
          title="Secure Transactions"
          description="Trade with confidence knowing your transactions are protected by state-of-the-art security."
        />
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-neutral-200">Why Choose TradeCraft?</h2>
        <p className="text-lg text-neutral-500 mb-8">Experience the difference with our unique features</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon={<Users className="h-10 w-10 mb-4 text-neutral-400" />}
          title="Community Insights"
          description="Connect with fellow traders and share strategies in our vibrant community."
        />
        <FeatureCard
          icon={<Globe className="h-10 w-10 mb-4 text-neutral-400" />}
          title="Global Markets"
          description="Access a wide range of international markets and diversify your portfolio."
        />
        <FeatureCard
          icon={<TrendingUp className="h-10 w-10 mb-4 text-neutral-400" />}
          title="AI-Powered Predictions"
          description="Leverage our advanced AI algorithms for market trend predictions and insights."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="text-center bg-neutral-800 border-neutral-700">
      <CardHeader>
        <div className="flex justify-center">{icon}</div>
        <CardTitle className="text-neutral-200">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}