import React, { useEffect, useState } from 'react';
import { StudentPresent } from '../components/Student_present';
export const Admin = () => {

  //variables
   const [nameData,setnameData]=useState([])
   const [currentDateTime, setCurrentDateTime] = useState(new Date());
   const [presentStudents, setPresentStudents] = useState([]);
  

   const handlePresentClick = (id, isPresent) => {
    if (isPresent) {
      if(!presentStudents.includes(id)){
        setPresentStudents((prevPresentStudents) => [...prevPresentStudents, id]);
      }    
    } else {
      setPresentStudents((prevPresentStudents) =>
        prevPresentStudents.filter((studentId) => studentId !== id)
      );
    }
  };

  const handleSubmit = async () => {
    try {
      const attendanceDetails = nameData.map((student) => ({
        email: student.email,
        isPresent: presentStudents.includes(student.email),
        date: currentDateTime.toDateString(),
      }));
  
      const response = await fetch("http://localhost:8000/saveAttendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attendanceDetails),
      });
  
      if (!response.ok) {
        throw new Error("Failed to save attendance");
      }
  
      console.log("Attendance details saved successfully");
    } catch (error) {
      console.error("Error saving attendance:", error);
    }
  };
  

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
              <StudentPresent obj={obj} onPresentClick={(isPresent) => handlePresentClick(obj.email, isPresent)}></StudentPresent>
            </div>
            </>
          )
        })
       }
        </div>

        <button onClick={handleSubmit} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};
