import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { SchoolSearchDisplay } from '../components/SchoolSearchDisplay';

export const JoinSchool = () => {
  const { schools } = useAuth();
  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (schools) {
      setSchoolData(schools);
      setLoading(false);
      console.log(schools);
    }
  }, [schools]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[80vw] p-4 mt-5 shadow-lg rounded-md'>
        <input
          type="text"
          placeholder="Search for schools"
          // value={searchQuery}
          // onChange={handleSearchChange}
          className="w-full p-2 rounded-md text-black"
        />
      </div>
      <div className='flex flex-col w-[80vw]'>
        {
          schoolData.map((element) => (
            <SchoolSearchDisplay prop={element} />
          ))
        }
      </div>
    </div>
  )
}
