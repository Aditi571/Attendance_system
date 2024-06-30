import React from 'react'

export const SchoolSearchDisplay = ({ prop }) => {
  return (
    <div className="border rounded-lg shadow-lg p-5 mt-5 bg-blue-500 text-white">
      <div className="text-xl font-bold">{prop.schoolName}</div>
      <div className="text-gray-200">Principal Name : {prop.username}</div>
    </div>
  )
}
