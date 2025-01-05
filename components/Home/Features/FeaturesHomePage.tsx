import React from 'react'
import { FeatureCard } from './FeatureCard/FeatureCard'
import { FiBell, FiCpu, FiDollarSign, FiTarget } from 'react-icons/fi'

export const FeaturesHomePage = () => {
    return (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 w-[80%] lg:w-[60%] xl:w-[90%] 2xl:w-[75%] 3xl:w-[60%] self-center">
        <FeatureCard
          header="Smart Budgeting"
          text="Automatically categorize and track your expenses to maintain a balanced budget. Gain insights into your spending habits and allocate funds effectively to reach your financial goals effortlessly."
          icon={FiDollarSign}
        />
        <FeatureCard
          header="AI-Driven Insights"
          text="Receive personalized financial recommendations powered by AI. Optimize your spending and savings with actionable advice tailored to your financial habits and lifestyle."
          icon={FiCpu}
        />
        <FeatureCard
          header="Goal Setting & Tracking"
          text="Set ambitious financial goals and monitor your progress with intuitive tracking tools. Stay motivated as you work towards achieving your dreams with clear milestones and real-time updates."
          icon={FiTarget}
        />
        <FeatureCard
          header="Real-Time Notifications"
          text="Stay informed with instant alerts on your spending, budget status, and upcoming financial events. Never miss a payment or opportunity to save with timely updates and reminders."
          icon={FiBell}
        />
      </div>
    );
  };
  