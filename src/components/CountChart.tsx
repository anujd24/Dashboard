"use client"

import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Single',
    uv: 10,
    fill: '#8884d8',
  },
  {
    name: 'Multiple',
    uv: 90,
    fill: '#83a6ed',
  }
];

const CountChart = () => {
    return(
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Tenants</h1>
                <Image src={"/moreDark.png"} alt='' height={20} width={20}></Image>
            </div>

            {/* Chart */}
            <div className='w-full h-[75%]'>
            <ResponsiveContainer>
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar
        
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
    
            </div>

            {/* Bottom */}
            <div className='flex justify-center gap-16'> 
              <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-adSky rounded-full'></div>
                <h1 className='font-bold'>1,234</h1>
                <h2 className='text-xs text-gray-300'>Single (10%)</h2>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-adYellow rounded-full'></div>
                <h1 className='font-bold'>4,567</h1>
                <h2 className='text-xs text-gray-300'>Multiple (90%)</h2>
              </div>
            </div>
        </div>
    )
}

export default CountChart
