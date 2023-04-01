import React from 'react'
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {MdOutlineVisibility} from "react-icons/md"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { postData, putData } from '../utils/apiCall';

const StudentLogin = (props) => {
    const accounttype = props.accounttype;
    const setIsLoggedIn = props.setIsLoggedIn;
    const [formData, setFormdata] = useState({
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        confirmPassword:"",
        mobileNo:"",
        type:"",
        graduationYear:"",
        year:"",
        meritRank:"",
        gender:"",
        dob:"",
        distance:"",
        adhar:"",
        branch:"",
        cast:"",
        middleName:"",
        disable:""
    });

    const [createpasswordVisible, setCreatePasswordVisible] = useState(false);
    const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
    function passwordclickHandler(){
        setCreatePasswordVisible(!createpasswordVisible);
    }
    
    function confirmclickHandler(){
        setConfirmPasswordVisible(!confirmpasswordVisible);
    }

    function changeHandler(event){
        setFormdata((prev)=>({
            ...prev,
            [event.target.name] : event.target.value 
        }))
    }

    const nevigate = useNavigate();
    
    function submitHandler(event){
        console.log(formData.password);
        console.log(formData.confirmPassword);
        if(formData.password!==formData.confirmPassword){
            event.preventDefault();
            toast.error("Password Doesn't match");
            return;
        }
        event.preventDefault();
        postData("https://studynotion-11b19-default-rtdb.firebaseio.com/studentregister.json",formData)
        toast.success("successfully Created");
        setIsLoggedIn(true);
        nevigate("/studentdashboard");
        
    }
    
     const finalData = {
        ...formData,
        accounttype
     }
     console.log(finalData);

  return (
    <div className='w-"bg-richblack-800 justify-between items-center text-richblack-100 mt-[3rem] w-[1160px] max-w--[11/12] mx-auto px-4 py-2  mb-4 border-richblack-200"'>
        <form onSubmit={submitHandler} className="flex gap-4 flex-col ">
        <div className="flex gap-4 mt-1">
                    <label className="w-[50%]">
                        <p>First Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Anchal"
                            value={formData.firstName}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                    </label>
                    

       </div>

       <div className="flex gap-4 mt-1">
                    <label className="w-[50%]">
                        <p>Middle Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            type="text"
                            name="middleName"
                            placeholder="Rajeshkumar"
                            value={formData.middleName}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                    </label>
                    

       </div>


       <div className="flex gap-4 mt-1">
       <label className="w-[50%]">
                        <p>Last Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Patel"
                            value={formData.lastName}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                    </label>
       </div>

         <fieldset>
            <legend>Gender</legend>
                <div className='flex gap-6 items-center'>
                    <div className="flex justify-center items-center gap-4 ">
                        <input
                                required
                                type="radio"
                                name="gender"
                                onChange={changeHandler}
                                value="male"
                                id="male"
                                checked={formData.gender==="male"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full  text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='male'>Male</label>
                    </div>      
                        <div className="flex justify-center items-center gap-4 cursor-pointer">
                            <input
                                required
                                type="radio"
                                name="gender"
                                onChange={changeHandler}
                                value="female"
                                id="female"
                                checked={formData.gender==="female"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='female'>Female</label>

                        </div>

                        <div className="flex justify-center items-center gap-4 ">
                        <input
                                required
                                type="radio"
                                name="gender"
                                onChange={changeHandler}
                                value="other"
                                id="other"
                                checked={formData.gender==="other"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full  text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='other'>Other</label>
                    </div>
                        
                </div>
            </fieldset>
            <div>
                    <label>
                        <p>Date of Birth <sup className='text-pink-200'>*</sup></p>
                        <input
             
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%]"></input>
                    </label>
    
            </div>
                <div>
                    <label>
                        <p>Distance <sup className='text-pink-200'>*</sup></p>
                        <input

                            type="text"
                            name="distance"
                            placeholder="Distance between your home and college"
                            value={formData.distance}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%]"></input>
                    </label>
    
                </div>
                <div>
                    <label>
                        <p>Aadharcard Number<sup className='text-pink-200'>*</sup></p>
                        <input
                            placeholder="0000 0000 0000"
                            type="tel"
                            name="adhar"
                            pattern="[0-9]{4} [0-9]{4} [0-9]{4}"
                            value={formData.adhar}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%]"></input>
                    </label>
    
                </div>
                <div>
                    <label>
                        <p>Email Address <sup className='text-pink-200'>*</sup></p>
                        <input
                            type="email"
                            name="email"
                            placeholder="abc@gmail.com"
                            value={formData.email}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%]"></input>
                    </label>
    
                </div>
                <div>
                    <label >
                            <p >Mobile Number<sup className='text-pink-200'>*</sup></p>
                            <input
                                required
                                type="tel"
                                name="mobileNo"
                                onChange={changeHandler}
                                placeholder="00000 00000"
                                value={formData.mobileNo}
                                
                                pattern="[0-9]{5} [0-9]{5}"
                                className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%]"
                            />
                    </label>
            </div>

            <fieldset>
            <legend>Current Year</legend>
                <div className='flex gap-6 items-center'>
                    <div className="flex justify-center items-center gap-4 ">
                        <input
                                required
                                type="radio"
                                name="year"
                                onChange={changeHandler}
                                value="1st"
                                id="1st"
                                checked={formData.year==="1st"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full  text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='1st'>1st</label>
                    </div>      
                        <div className="flex justify-center items-center gap-4 cursor-pointer">
                            <input
                                required
                                type="radio"
                                name="year"
                                onChange={changeHandler}
                                value="2nd"
                                id="2nd"
                                checked={formData.year==="2nd"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='2nd'>2nd</label>

                        </div>

                        <div className="flex justify-center items-center gap-4 cursor-pointer">
                            <input
                                required
                                type="radio"
                                name="year"
                                onChange={changeHandler}
                                value="3rd"
                                id="3rd"
                                checked={formData.year==="3rd"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='3rd'>3rd</label>

                        </div>

                        <div className="flex justify-center items-center gap-4 cursor-pointer">
                            <input
                                required
                                type="radio"
                                name="year"
                                onChange={changeHandler}
                                value="4th"
                                id="4th"
                                checked={formData.year==="4th"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='4th'>4th</label>

                        </div>
                        
                </div>
            </fieldset>

                <div>
                        <label >
                                <p >Graduation Year<sup className='text-pink-200'>*</sup></p>
                                <input
                                    required
                                    type="text"
                                    name="graduationYear"
                                    onChange={changeHandler}
                                    placeholder="Enter your Graduation Year"
                                    value={formData.graduationYear}
                                    className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%]"
                                />
                        </label>
                </div>
                <div>
                    <label>
                    <p >Branch Name <sup className='text-pink-200'>*</sup></p>
                    <select
                   required
                    name="branch"
                    checked={formData.branch}
                    onChange={changeHandler}
                    className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%] cursor-pointer">
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Electronics & Communication">Electronics & Communication</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Instrumention and Control">Instrumention and Control</option>
                        <option value="Power Electronics">Power Electronics</option>
                    </select>
                    </label>
                </div>
                

            <fieldset>
            <legend>Admission Type</legend>
                <div className='flex gap-6 items-center'>
                    <div className="flex justify-center items-center gap-4 ">
                        <input
                                required
                                type="radio"
                                name="type"
                                onChange={changeHandler}
                                value="regular"
                                id="regular"
                                checked={formData.type==="regular"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full  text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='Yes'>Regular</label>
                    </div>      
                        <div className="flex justify-center items-center gap-4 cursor-pointer">
                            <input
                                required
                                type="radio"
                                name="type"
                                onChange={changeHandler}
                                value="d2d"
                                id="d2d"
                                checked={formData.type==="d2d"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='no'>D2D</label>

                        </div>
                        
                </div>
            </fieldset>


             <div>
                  <label >
                     <p >Merit Rank<sup className='text-pink-200'>*</sup></p>
                      <input
                        required
                         type="text"
                         name="meritRank"
                        onChange={changeHandler}
                         placeholder="Enter your Merit Rank"
                        value={formData.meritRank}
                        className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%]"
                         />
                    </label>
                </div>
                <div>
                    <label>
                    <p >Cast<sup className='text-pink-200'>*</sup></p>
                    <select
                    required
                    name="cast"
                    checked={formData.cast}
                    onChange={changeHandler}
                    className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%] cursor-pointer">
                        <option value="General">General</option>
                        <option value="EWS">EWS</option>
                        <option value="OBC/SEBC">OBC/SEBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        
                    </select>
                    </label>
                </div>
                <div className="flex gap-4 mt-1">
                    <label className="w-[50%] relative">
                        <p>Create Password <sup className='text-pink-200'>*</sup></p>
                        <input
            
                            type={createpasswordVisible?("text") : ("password")}
                            name="password"
                            value={formData.password}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                            <div className="absolute bottom-[5px] right-5">
                            {createpasswordVisible?(<AiOutlineEyeInvisible onClick={passwordclickHandler} className="h-[20px] w-[20px]"></AiOutlineEyeInvisible>) : (<MdOutlineVisibility onClick={passwordclickHandler} className="h-[20px] w-[20px]"></MdOutlineVisibility>) }
                            </div>
                           
                    </label>
                </div>
                <fieldset>
            <legend>Physically Disable</legend>
                <div className='flex gap-6 items-center'>
                    <div className="flex justify-center items-center gap-4 ">
                        <input
                                required
                                type="radio"
                                name="disable"
                                onChange={changeHandler}
                                value="Yes"
                                id="Yes"
                                checked={formData.disable==="Yes"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full  text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='Yes'>Yes</label>
                    </div>      
                        <div className="flex justify-center items-center gap-4 cursor-pointer">
                            <input
                                required
                                type="radio"
                                name="disable"
                                onChange={changeHandler}
                                value="no"
                                id="no"
                                checked={formData.disable==="no"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='no'>No</label>

                        </div>
                        
                </div>
            </fieldset>


                <div>
                <label className="relative w-[50%]"> 
                        <p>Cofirm password <sup className='text-pink-200'>*</sup></p>
                        <input
                            type={confirmpasswordVisible?("text") : ("password")}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%]"></input>
                            <div className="absolute -bottom-[1px] right-5">
                            {confirmpasswordVisible?(<AiOutlineEyeInvisible  onClick={confirmclickHandler} className="h-[20px] w-[20px]"></AiOutlineEyeInvisible>) : (<MdOutlineVisibility  onClick={confirmclickHandler} className="h-[20px] w-[20px]"></MdOutlineVisibility>)}
                            </div>
                            
                    </label>
                </div>

                <div className="w-[50%] flex justify-center mt-3 "> 
                    <button className="w-[50%] py-2 bg-yellow-500 rounded-md mt-3 mb-1 text-richblack-900 font-semibold hover:bg-yellow-600 transition-all duration-200 ">Create Account</button>
                </div>
        </form>
            
    </div>
  )
}

export default StudentLogin