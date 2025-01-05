import React from 'react'
import { BenefitCard } from './BenefitCard/BenefitCard'


export const BenefitsHomePage = () => {
    return (
      <div className="grid grid-cols-1 gap-6 w-[80%] sm:w-1/2 lg:grid-cols-2 lg:w-[80%] 2xl:w-[65%] 3xl:w-[33%] lg:gap-12 self-center">
        <BenefitCard
          header="AI Keeps Evolving"
          text="Our AI technology continuously learns and evolves, ensuring that you always get the most accurate and personalized financial insights. Stay ahead of the curve with cutting-edge recommendations."
        />
        <BenefitCard
          header="Save Time & Money"
          text="Simplify your financial management by automating routine tasks. Spend less time worrying about your budget and more time enjoying life with streamlined tools and smart automation."
        />
      </div>
    );
  };
  