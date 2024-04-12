import React, { useEffect, useState } from 'react';
import { StudentPresent } from '../components/Student_present';
export const Admin = () => {

  //variables
   const [nameData,setnameData]=useState([])
   const [currentDateTime, setCurrentDateTime] = useState(new Date());


  //UseEffect
  useEffect(() => {
    //Functions
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/fetch_names');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        //console.log(jsonData)
        setnameData(jsonData)
      } catch (error) {
        console.log(error)
      }
    };

    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };


    //Function calls
    updateDateTime()
    fetchData()
  }, []);

    
  
    
  return (
    <div className='flex'>
      <div className='flex flex-col items-center w-[100vw] h-[100vh]'>
        <h1 className='mt-4 text-2xl font-bold'>{currentDateTime.toLocaleDateString()}</h1>
        <div className='flex flex-wrap w-[80vw]'>
        {
        nameData.map((obj)=>{
          return(
            <>
            <div >
              <StudentPresent obj={obj}></StudentPresent>
            </div>
            </>
          )
        })
       }
        </div>

      </div>
    </div>
  );
};
