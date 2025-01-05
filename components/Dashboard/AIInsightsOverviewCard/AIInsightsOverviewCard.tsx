import { AIInsight } from '@/types'
import Link from 'next/link'
import React from 'react'
import { FiCpu } from 'react-icons/fi'

export const AIInsightsOverviewCard = ({ AIInsights }: { AIInsights: AIInsight[] }) => {
    return (
        <div className='card'>
            <div className='flex items-start justify-between mb-6'>
                <div>
                    <h1>Recent AI Insights</h1>

                    <h2 className='mt-1 mb-2 text-gray-400 text-xs'>Closer to 1.0 Means More Accurate Insight</h2>
                    <Link href="/ai-insights" className='viewButton'>
                        View Insights
                    </Link>
                </div>

                <div className='p-2 rounded-lg bg-gray-800/50'>
                    <FiCpu className='h-7 w-7' />
                </div>
            </div>
            {AIInsights.length > 0 ? (
                <div className='space-y-4'>
                {AIInsights.map((insight) => (
                    <div className='bg-gray-800/50 p-4  rounded-lg shadow-gray-900 shadow-lg'>
                        <div className='flex items-start justify-between'>
                            <div className='text-amber-400'>{insight.type}</div>
                            <div className='py-1 px-5 bg-zinc-800/50 rounded-lg '>
                                <h1 className={`${insight.relevance > 0.5 ? "text-green-400" : "text-red-400"}`}>{insight.relevance}</h1>
                            </div>
                        </div>

                        <h1 className='text-gray-300 self-center mt-2'>{insight.content}</h1>
                    </div>
                ))}
            </div>
            ) : (
                <p className='mt-6'>You've not received any insights yet.</p>
            )}
            

        </div>
    )
}
