import React from 'react'
import {BsArrowRight} from "react-icons/bs";
import { Link } from 'react-router-dom';

function StudentDashboard() {
  return (
    <div  className='w-full bg-richblack-800 py-1 flex mt-2 overflow-hidden'>
        <div className='flex w-full justify-between'>
            <div className='h-[672px] w-[20%] bg-yellow-100'>
            <Link>
                    <p>Leave Application</p>
            </Link>
            <Link>
                    <p>Complain Forum</p>
            </Link>
            <Link>
                    <p>Check In /Check Out</p>
            </Link>
            </div>
            <div className='flex justify-between w-full px-[8rem] pt-[]'>
                <button className='bg-yellow-500 h-[150px] w-[250px] rounded-md flex flex-col items-center justify-between text-richblack-900 font-semibold hover:scale-110 transition-all duration-300'>
                    <div className='h-[70%] w-full flex justify-center items-center text-[1.5rem]'>My Profile</div>
                    <div className='bg-richblack-100 w-full flex justify-center items-center gap-3 py-2 rounded-md'>
                        View Full Detail
                        <BsArrowRight></BsArrowRight>
                    </div>
                </button>
                <button className='bg-yellow-500 h-[150px] w-[250px] rounded-md flex flex-col items-center justify-between text-richblack-900 font-semibold hover:scale-110 transition-all duration-300'>
                    <div className='h-[70%] w-full flex justify-center items-center text-[1.5rem]'>My Room</div>
                    <div className='bg-richblack-100 w-full flex justify-center items-center gap-3 py-2 rounded-md'>
                        View Full Detail
                        <BsArrowRight></BsArrowRight>
                    </div>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default StudentDashboard