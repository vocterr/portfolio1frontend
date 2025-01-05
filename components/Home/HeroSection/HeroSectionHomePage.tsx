import Image from 'next/image'
import React from 'react'

export const HeroSectionHomePage = () => {
  return (
    <div className='relative h-64 sm:h-72 md:h-80 lg:h-96 2xl:h-[500px] lg:w-[80%] xl:w-[65%] 2xl:w-[55%] 3xl:w-[50%] lg:self-center lg:rounded-lg'>
        <Image src="/images/hero.jpg" alt='image' width={2000} height={2000} className='h-full lg:rounded-lg'/>
        <div className='flex p-4 flex-col justify-end absolute h-full w-full bg-black/40 top-0 lg:rounded-lg'>
            <h1 className='font-semibold text-lg sm:text-xl xl:text-2xl leading-6 tracking-wide'>Take Control of Your Finances with AI-Powered Insights</h1>
            <h2 className='text-gray-200 text-sm mb-3 leading-[1.15rem]'> Manage your budget, track expenses, and achieve your financial goals effortlessly.</h2>

            <button className='border border-white rounded-lg py-2 px-4 self-center font-semibold tracking-wider'>
              Get Started for Free
            </button>

        </div>
    </div>
  )
}
