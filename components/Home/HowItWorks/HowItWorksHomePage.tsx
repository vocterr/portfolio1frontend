import { FeatureCard } from '@/components/Home/Features/FeatureCard/FeatureCard'
import React from 'react'
import { FiPieChart, FiTarget, FiTrendingUp, FiUserPlus, FiUsers } from 'react-icons/fi'

export const HowItWorksHomePage = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 w-[80%] lg:w-[60%] xl:w-[90%] 2xl:w-[75%] 3xl:w-[60%] self-center">
      <FeatureCard
        header="Sign Up & Connect Accounts"
        text="Create your free account and securely link your bank and credit card accounts. Get started quickly with an easy-to-use interface designed to integrate seamlessly with your financial tools."
        icon={FiUserPlus}
      />
      <FeatureCard
        header="Track Your Spending"
        text="Automatically categorize your transactions and monitor your expenses in real-time. Get a clear picture of where your money is going and make informed decisions effortlessly."
        icon={FiPieChart}
      />
      <FeatureCard
        header="Set Goals & Get Insights"
        text="Define your financial goals and receive AI-powered insights to achieve them. Stay on track with actionable recommendations and progress tracking at every step."
        icon={FiTarget}
      />
      <FeatureCard
        header="Optimize Your Budget"
        text="Use intelligent tools to adjust your budget, maximize your savings, and invest wisely. Empower yourself with smart suggestions tailored to your unique financial situation."
        icon={FiTrendingUp}
      />
    </div>
  );
};
