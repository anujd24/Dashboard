import React from 'react'
import UserCard from '@/components/UserCard'

function adminPage() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT SIDE */}
      <div className='w-full lg:w-2/3'>
      {/* USER CARDS */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='Tenant'></UserCard>
          <UserCard type='Landlord'></UserCard>
          <UserCard type='Manager'></UserCard>
          <UserCard type='Helper'></UserCard>
        </div>
      </div>
      
      {/* RIGHT SIDE */}
      <div className='w-full lg:w-1/3'>r</div>
    </div>
  )
}

export default adminPage