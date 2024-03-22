import React, { useState } from 'react';

const Membership = () => {
  const [isUpgraded, setIsUpgraded] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [members, setMembers] = useState([]);

  const handleUpgradeClick = () => {
    setIsUpgraded(true);
    // Perform upgrade action here, such as updating user's plan in the backend
  };

  const handleAddMember = () => {
    const newMember = {
      name: newMemberName,
      email: newMemberEmail
    };
    setMembers([...members, newMember]);
    setNewMemberName('');
    setNewMemberEmail('');
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
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Current Plan</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Premium{isUpgraded && ' Plus'}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Plan Expiry</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">January 31, 2025</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Upgrade Plan</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  {!isUpgraded && (
                    <button onClick={handleUpgradeClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Upgrade to Premium.
                    </button>
                  )}
                  {isUpgraded && <span className="text-gray-500">Already Upgraded</span>}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Add New Member</dt>
                <dd className="mt-1 sm:col-span-2">
                  <div className="flex space-x-4">
                    <input type="text" placeholder="Name" value={newMemberName} onChange={(e) => setNewMemberName(e.target.value)} className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm" />
                    <input type="email" placeholder="Email" value={newMemberEmail} onChange={(e) => setNewMemberEmail(e.target.value)} className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm" />
                    <button onClick={handleAddMember} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
                  </div>
                </dd>
              </div>
              {members.length > 0 && (
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Members List</dt>
                  <dd className="mt-1 sm:col-span-2">
                    <ul className="divide-y divide-gray-200">
                      {members.map((member, index) => (
                        <li key={index} className="py-2">
                          <span className="text-gray-900">{member.name}</span>
                          <span className="ml-2 text-gray-500">{member.email}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
