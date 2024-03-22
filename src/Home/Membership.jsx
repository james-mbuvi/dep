import React, { useState } from 'react';

const Membership = () => {
  const [isUpgraded, setIsUpgraded] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  const handleUpgradeClick = () => {
    if (isPaid) {
      // Perform upgrade action here, such as updating user's plan in the backend
      // For demonstration, we'll just toggle the state to simulate an upgrade
      setIsUpgraded(true);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handlePaymentStatusChange = (e) => {
    setIsPaid(e.target.checked);
  };

  const handleAddMember = () => {
    // Perform member addition action here, such as sending data to the backend
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Image:', image);
    console.log('Paid:', isPaid);
    // Reset form fields after adding member
    setName('');
    setEmail('');
    setImage(null);
    setIsPaid(false);
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
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
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{isUpgraded ? 'Premium Plus' : 'Premium'}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Plan Expiry</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">January 31, 2025</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Upgrade Plan</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  {isPaid ? (
                    <button onClick={handleUpgradeClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Upgrade to Premium
                    </button>
                  ) : (
                    <span className="text-green-500">Upgrade option available after payment</span>
                  )}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Add New Member</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-black-300 focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="border-blue-300 focus:ring-red-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="paid" className="inline-flex items-center">
                      <input
                        type="checkbox"
                        id="paid"
                        checked={isPaid}
                        onChange={handlePaymentStatusChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-900">Paid</span>
                    </label>
                  </div>
                  <button onClick={handleAddMember} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Member
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
