import React, { useEffect, useState } from 'react'

export const StudentPresent = ({obj}) => {
const [clickedP,setclickedP]=useState(false)
const [clickedA,setclickedA]=useState(false)
const [studentArray,setstudentArray]=useState([])
const handleclickP=()=>{
    setclickedP(true)
    setclickedA(false)
    if (!studentArray.includes(obj.id)) {
        setstudentArray([...studentArray, obj.id]);
    }
    console.log(studentArray)
}
const handleclickA=()=>{
    setclickedP(false)
    setclickedA(true)
    if (studentArray.includes(obj.id)) {
        const newstudentArray = studentArray.filter(id => id !== obj.id);
        setstudentArray(newstudentArray);
    }
}
useEffect(()=>{
console.log(studentArray)
},[studentArray])
  return (
    <div>
        <div className='pt-3 pb-3 pl-5 pr-5 mr-5 rounded-md mb-3 mt-3 bg-blue-300 '>
            <h1 className=' text-center'>{obj.username}</h1>
            <div className='flex flex-row mt-3'>
                <button className={`flex ${clickedP ? ` bg-gray-400` :`bg-green-400`} p-2 rounded-lg`} onClick={handleclickP}>Present</button>
                <button className={`flex ${clickedA ? ` bg-gray-400` :`bg-red-400`} ml-2 p-2 rounded-lg`} onClick={handleclickA}>Absent</button>
            </div>
        </div>
    </div>
  )
}
export const array=[]
