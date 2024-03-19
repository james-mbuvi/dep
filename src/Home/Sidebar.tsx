import React from 'react'
import { FaCalendar, FaCog, FaDollarSign, FaHome, FaPhone, FaTasks, FaUsers, FaWallet } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <div className='w-64 bg-blue-800 fixed px-4 py-2'>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Home
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaPhone className='inline-block w-6 h-6 mr-2 -mt-2'></FaPhone>
            Contacts
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaCalendar className='inline-block w-6 h-6 mr-2 -mt-2'></FaCalendar>
            Events
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
            Campaingns
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaUsers className='inline-block w-6 h-6 mr-2 -mt-2'></FaUsers>
            Membership
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaDollarSign className='inline-block w-6 h-6 mr-2 -mt-2'></FaDollarSign>
            Finance
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaUserGroup className='inline-block w-6 h-6 mr-2 -mt-2'></FaUserGroup>
            Community
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaTasks className='inline-block w-6 h-6 mr-2 -mt-2'></FaTasks>
            My Task
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-800 py-2'>
          <a href="" className='px-3'>
            <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
            Settings
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
