import React from 'react'
import  './Dashboard.css';
const Dashboard = () => {
  return (
    <div>
    <div className="container">
    <div className="nav">
      <h3>Dashboard</h3>
      <p>Projects</p>
      <p>Users</p>
      <div className="segment-box">
        <i className="fa-solid fa-circle-plus" />
        <p>Add new segment</p>
      </div>
      <div className="alarm-box">
        <span>3</span>
        <i className="fa-solid fa-bell" />
      </div>
      <img src="https://i.pravatar.cc/200" alt="" />
    </div>
    <div className="upgrade">
      <i className="fa-brands fa-studiovinari" />
      <h4>
        Upgrade to <span>PRO</span> to unlock more features
      </h4>
      <button>UPGRADE</button>
    </div>
    <div className="users">
      <h4>Users</h4>
      <h2>9,452</h2>
      <img
        src="https://images.pexels.com/photos/4482885/pexels-photo-4482885.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt="chart1"
      />
    </div>
    <div className="newUsers">
      <h4>New Users</h4>
      <h2>52</h2>
      <img
        src="https://images.pexels.com/photos/6285131/pexels-photo-6285131.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="chart2"
      />
    </div>
    <div className="performance">
      <div className="percentages">
        <div className="direct">
          <span /> {/*circle*/}
          <h3>24% Direct</h3>
        </div>
        <div className="Social">
          <span /> {/*circle*/}
          <h3>31% Social</h3>
        </div>
        <div className="Organic">
          <span /> {/*circle*/}
          <h3>45% Organic</h3>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  )
}

export default Dashboard
