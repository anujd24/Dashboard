"use client"

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

            </div>
        </div>
    )
}

export default AttendanceChart