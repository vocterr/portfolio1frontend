"use client";

import { Account, Transaction } from '@/types'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ChartData
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2"
import React from 'react'
import { FiBarChart } from 'react-icons/fi'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);


const PerformanceMetricsCard = ({ transactions, accounts }: { transactions: Transaction[], accounts: Account[] }) => {
    const income = transactions.length > 0 ? transactions.filter((t) => t.type == "INCOME").reduce((acc, t) => acc + t.amount, 0) :  0;
    const expenses = transactions.length > 0 ? transactions.filter((t) => t.type === "EXPENSE").reduce((acc, t) => acc + t.amount, 0) : 0;

    const incomeData = {
        labels: ["Income", "Expenses"], // X-axis labels
        datasets: [
            {
                label: "Amount",
                data: [income, expenses], // Bar values
                backgroundColor: ["#4caf50", "#f44336"], // Green for income, red for expenses
                borderColor: ["#388e3c", "#d32f2f"], // Borders for the bars
                borderWidth: 1,
            },
        ],
    };

    const accountsData: ChartData<"bar"> = {
        labels: accounts.length > 0 ? accounts.map((account) => account.name) : ["account1, account2"], // X-axis labels
        datasets: [
            {
                label: "Account Balances", // Legend label
                data: accounts.length > 0 ? accounts.map((account) => account.balance) : [0, 0], // Data for bars
                backgroundColor: accounts.length > 0 ? accounts.map((account) => "#4caf50") : "4caf50", // Green for all bars
                borderColor: accounts.length > 0 ? accounts.map((account) => "#388e3c") : "388e3c", // Darker green border
                borderWidth: 1, // Bar border width
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false
    }
    return (
        <div className='card lg:row-span-2'>
            <div className='flex items-center justify-between'>
                <h1>Performance Metrics</h1>
                <div className='p-2 rounded-lg bg-zinc-800/50'>
                    <FiBarChart className='h-7 w-7' />
                </div>
            </div>
            <div className='h-80'>
                <Bar data={incomeData} options={options} />
            </div>
            <hr  className='mt-6 mb-6 '/>
            <div className='h-80'>
                <Bar data={accountsData} options={options} />
            </div>
            <h1 className='mt-6 text-gray-400 text-sm'>Informations gathered from the entire {new Intl.DateTimeFormat('en-US', {month: "long"}).format(new Date())}</h1>
        </div>
    )
}


export default PerformanceMetricsCard