import React from 'react'
import UserCard from '@/components/UserCard'

function adminPage() {
  return (
    <div>
      <div>
        <div>
          <UserCard type='Tenant'></UserCard>
          <UserCard type='Landlord'></UserCard>
          <UserCard type='Manager'></UserCard>
          <UserCard type='Helper'></UserCard>
        </div>
      </div>
      
      <div>r</div>
    </div>
  )
}

export default adminPage