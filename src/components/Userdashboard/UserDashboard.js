import React from 'react'

const UserDashboard = () => {
     // Sample user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'user',
    // ... additional user data
  };
  return (
    <div>
    <h1>Welcome, {userData.name}!</h1>
    <h3>Email: {userData.email}</h3>
    <h3>Role: {userData.role}</h3>
    {/* Additional dashboard components and functionality */}
  </div>

  )
}

export default UserDashboard