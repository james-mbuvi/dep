import React, { useState } from 'react';

const Membership = () => {
  const [isUpgraded, setIsUpgraded] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [membershipStatus, setMembershipStatus] = useState('Active');
  const [events, setEvents] = useState([]);

  const handleUpgradeClick = () => {
    // Perform upgrade action here, such as updating user's plan in the backend
    // For demonstration, we'll just toggle the state to simulate an upgrade
    setIsUpgraded(true);
  };

  const handleAddMember = () => {
    // Add new member logic here, such as sending data to backend
    console.log('New member added:', newMemberName, newMemberEmail);
    // Clear input fields after adding member
    setNewMemberName('');
    setNewMemberEmail('');
  };

  const handleAddAnnouncement = () => {
    // Add announcement logic here
    console.log('Announcement added:', announcement);
    // Clear announcement input field after adding announcement
    setAnnouncement('');
  };

  const handleAddEvent = () => {
    // Add event logic here
    console.log('Event added:', events);
    // Clear events input field after adding event
    setEvents([]);
  };

  return (
    <div className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Membership</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your membership options here.</p>
          </div>
          <div className="border-t border-gray-200">
            {/* Upgrade Section */}
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Upgrade Plan</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {!isUpgraded && (
                  <button onClick={handleUpgradeClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Upgrade to Premium
                  </button>
                )}
                {isUpgraded && <span className="text-gray-500">Already Upgraded</span>}
              </dd>
            </div>
            {/* Add New Member Section */}
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Add New Member</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <input type="text" placeholder="Name" value={newMemberName} onChange={(e) => setNewMemberName(e.target.value)} className="border rounded px-3 py-1 mr-2" />
                <input type="email" placeholder="Email" value={newMemberEmail} onChange={(e) => setNewMemberEmail(e.target.value)} className="border rounded px-3 py-1 mr-2" />
                <button onClick={handleAddMember} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Member</button>
              </dd>
            </div>
            {/* Manage Announcements Section */}
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Manage Announcements</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <textarea placeholder="Write your announcement..." value={announcement} onChange={(e) => setAnnouncement(e.target.value)} className="border rounded px-3 py-2 w-full" rows="3"></textarea>
                <button onClick={handleAddAnnouncement} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Add Announcement</button>
              </dd>
            </div>
            {/* Membership Status Section */}
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Membership Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{membershipStatus}</dd>
            </div>
            {/* Upcoming Events Section */}
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Upcoming Events</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <textarea placeholder="Enter upcoming events..." value={events} onChange={(e) => setEvents(e.target.value)} className="border rounded px-3 py-2 w-full" rows="3"></textarea>
                <button onClick={handleAddEvent} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">Add Event</button>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
