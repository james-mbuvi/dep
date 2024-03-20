import React from 'react'
import { FaCalendar, FaCog, FaDollarSign, FaHome, FaPhone, FaTasks, FaUsers, FaWallet } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const Sidebar = () => {
  
  
    const handleHomeClick = () => {
      // Add your logic here for what should happen when the Home button is clicked
      console.log('Home button clicked');
    }

  return (
    <div className='w-64 bg-blue-800 fixed px-4 py-2'>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Home
          </button>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Contacts 
          </button>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Events
          </button>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Campaigns
          </button>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Membership
          </button>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Finance
          </button>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Community
          </button>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            My Tasks
          </button>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
        <button onClick={handleHomeClick} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Settings
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
