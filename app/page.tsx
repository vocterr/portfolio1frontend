"use client";
import React from "react";
import Image from "next/image";
import { FiBarChart2, FiTarget, FiZap, FiUsers } from "react-icons/fi";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col mt-16 items-center w-full min-h-screen">
      <section className="relative w-full h-[600px] flex items-center justify-center bg-gradient-to-r fro-black to-black text-white">

        <Image
          src="/images/hero.jpg"
          alt="hero background"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-wider mb-4">
            finAI: Smarter Financial Decisions
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl mb-8">
            Simplify your finances with AI-driven insights and personalized
            recommendations.
          </p>
          <Link href="/dashboard" className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-100 w-full flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">
          Powerful Features
        </h2>
        <p className="max-w-xl text-center text-gray-600 mb-10">
          Unlock a suite of smart tools that simplify managing your money and
          help you reach your goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] max-w-6xl">
          <FeatureItem
            icon={<FiBarChart2 size={32} />}
            title="Real-Time Analytics"
            text="Keep track of your spending and saving with real-time insights that help you stay on budget."
          />
          <FeatureItem
            icon={<FiTarget size={32} />}
            title="Goal-Oriented Tools"
            text="Set short and long-term targets. Our AI helps you stay motivated and on track."
          />
          <FeatureItem
            icon={<FiZap size={32} />}
            title="Automated Suggestions"
            text="Receive automated, personalized recommendations to optimize your finances."
          />
          <FeatureItem
            icon={<FiUsers size={32} />}
            title="Collaborative Options"
            text="Share financial goals or budgets with family members or partners seamlessly."
          />
        </div>
      </section>

      <section className="py-16 w-full flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-200">
          Get Started in 3 Simple Steps
        </h2>
        <div className="max-w-6xl w-[90%] grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <StepItem
            stepNumber="01"
            heading="Create an Account"
            description="Sign up with a few clicks and securely link your bank accounts."
          />
          <StepItem
            stepNumber="02"
            heading="Set Your Goals"
            description="Tell us what you want to achieve. Our AI builds a personalized plan."
          />
          <StepItem
            stepNumber="03"
            heading="Track & Improve"
            description="Review your progress anytime and adjust your plan for better results."
          />
        </div>
      </section>

      <section className="py-16 bg-gray-100 w-full flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[90%] max-w-5xl">
          <TestimonialCard
            name="Sarah Johnson"
            text="finAI helped me organize my finances in a way I never could before.
              The AI insights are spot on and super helpful!"
            imageUrl="/images/girl.avif"
          />
          <TestimonialCard
            name="Michael Green"
            text="I love how easy it is to see exactly where my money is going. 
              The budgeting tool has saved me so much time!"
            imageUrl="/images/user2.jpg"
          />
        </div>
      </section>

      <section className="py-16 px-3 w-full flex flex-col items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Ready to Transform Your Finances?
        </h2>
        <p className="max-w-xl text-center text-sm sm:text-lg mb-8">
          Take charge of your future. Join finAI and start making data-driven
          financial choices.
        </p>
        <Link href="/signup" className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
          Sign Up Now
        </Link>
      </section>
    </main>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}
function FeatureItem({ icon, title, text }: FeatureProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-gray-500 shadow-md  transition flex flex-col items-start">
      <div className="mb-4 text-indigo-600">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-gray-700">{title}</h3>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}

interface StepProps {
  stepNumber: string;
  heading: string;
  description: string;
}
function StepItem({ stepNumber, heading, description }: StepProps) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md shadow-gray-500 transition">
      <div className="w-16 h-16 bg-indigo-600 text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
        {stepNumber}
      </div>
      <h4 className="font-semibold text-gray-700 text-lg mb-2">{heading}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

interface TestimonialProps {
  name: string;
  text: string;
  imageUrl: string;
}
function TestimonialCard({ name, text, imageUrl }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md shadow-gray-500 transition flex flex-col">
      <div className="flex items-center mb-4">
        <Image
          src={imageUrl}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover h-10 w-10"
        />
        <div className="ml-3">
          <h5 className="font-semibold text-gray-700">{name}</h5>
          <p className="text-xs text-gray-500">Verified User</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
