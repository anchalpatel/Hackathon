import React from 'react'
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {MdOutlineVisibility} from "react-icons/md"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Administrator = (props) => {
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
        administrator:""
        
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
        toast.success("successfully Created");
        setIsLoggedIn(true);
        nevigate("/administratordashboard");
        
    }
    
     const finalData = {
        ...formData,
        accounttype
     }
     console.log(finalData);

  return (
    <div className='w-"bg-richblack-800 justify-between text-richblack-100 mt-[3rem] w-[1160px] max-w--[11/12] mx-auto px-4 py-2  mb-4 border-richblack-200"'>
       
       <form onSubmit={submitHandler} className="flex gap-4 flex-col">

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
            <legend>Hostel Type</legend>
                <div className='flex gap-4 items-center w-[50%] '>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <input
                                required
                                type="radio"
                                name="type"
                                onChange={changeHandler}
                                value="girls"
                                id="girls"
                                checked={formData.type==="girls"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full  text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='girls'>Girl's Hostel</label>
                    </div>      
                        <div className="flex justify-center items-center gap-4 cursor-pointer">
                            <input
                                required
                                type="radio"
                                name="type"
                                onChange={changeHandler}
                                value="boys"
                                id="boys"
                                checked={formData.type==="boys"}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] cursor-pointer'
                            />
                            <label className='w-full text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] cursor-pointer' htmlFor='boys'>Boys' Hostel</label>

                        </div>
                        
                </div>
            </fieldset>

            <label>
                    <p >Administrator Type<sup className='text-pink-200'>*</sup></p>
                    <select
                   
                    name="administrator"
                    checked={formData.administrator}
                    onChange={changeHandler}
                    className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[50%] cursor-pointer">
                        <option value="Warden">Warden</option>
                        <option value="Faculty_Co-Ordinator">Faculty Co-ordinator</option>
                        <option value="Other_Staff">Other Staff</option>
                        
                        
                    </select>
            </label>
  
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

export default Administrator