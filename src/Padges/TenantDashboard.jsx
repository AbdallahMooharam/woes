import React from 'react';

const TenantDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-white text-black py-5 text-center shadow-md">
        <h1 className="text-3xl font-bold">Tenant Dashboard</h1>
        <p className="mt-2">Manage your payments and view your rental details</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Rental Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between p-4 border-b">
              <span className="font-medium">Office Space:</span>
              <span className="text-gray-700">Office 101</span>
            </div>
            <div className="flex justify-between p-4 border-b">
              <span className="font-medium">Monthly Rent:</span>
              <span className="text-gray-700">$1200</span>
            </div>
            <div className="flex justify-between p-4 border-b">
              <span className="font-medium">Due Date:</span>
              <span className="text-gray-700">1st of each month</span>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Make a Payment</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="amount" className="block font-medium">Payment Amount:</label>
              <input
                type="number"
                id="amount"
                placeholder="$1200"
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block font-medium">Payment Method:</label>
              <select id="paymentMethod" className="mt-1 block w-full border rounded-lg p-2" required>
                <option value="">Select a method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-white text-black border border-blue-600 py-2 rounded-lg hover:bg-gray-200 transition">
              Submit Payment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TenantDashboard;
