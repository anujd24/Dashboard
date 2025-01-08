"use client"

import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
    {
      name: 'Mon',
      present: 40,
      absent: 24,
    },
    {
      name: 'Tues',
      present: 30,
      absent: 13,
    },
    {
      name: 'Wed',
      present: 20,
      absent: 98,
    },
    {
      name: 'Fri',
      present: 27,
      absent: 38,
    }
  ];

const AttendanceChart = () => {
    return (
        <div>
            <div>
                <h1>Attendance</h1>
                <Image src={"/moreDark.png"} alt=""width={20} height={20}></Image>
            </div>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart