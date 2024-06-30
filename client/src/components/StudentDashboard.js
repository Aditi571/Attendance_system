import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const StudentDashboard = () => {
  const { user, logoutUser } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(user);
    setUserData(user);
  }, [logoutUser]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        {userData && (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                Name: {userData.msg.username}
              </h2>
              <p className="text-gray-700">Class: {userData.msg.number}</p>
              <p className="text-gray-700">Email: {userData.msg.email}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Attendance Record</h2>
              <div className="flex justify-around mt-4">hey</div>
            </div>
          </>
        )}
        <button
          onClick={logoutUser}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
