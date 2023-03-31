import {AiOutlineEyeInvisible} from "react-icons/ai"
import {MdOutlineVisibility} from "react-icons/md"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios';

function SignUpForm(props){
    let setIsLoggedIn = props.setIsLoggedIn
    const [formData, setFormdata] = useState({
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        confirmPassword:""
    });
    
    const [createpasswordVisible, setCreatePasswordVisible] = useState(false);
    const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
    const nevigate = useNavigate();
    
    function changeHandler(event){
        setFormdata((prev)=>({
            ...prev,
            [event.target.name] : event.target.value 
        }))
    }
    
    function passwordclickHandler(){
        setCreatePasswordVisible(!createpasswordVisible);
    }
    
    function confirmclickHandler(){
        setConfirmPasswordVisible(!confirmpasswordVisible);
    }
    
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
        if(accounttype=="student"){
            nevigate("/studentLogin");
        }
        else{
            nevigate("/administrator");
        }
        
    }
    const [accounttype, setAccountType] = useState("student");

    
    function studentClickHandler(){
        setAccountType("student");
        
    }
    function inStructorClickHandler(){
        setAccountType("instuctor");
        
    }

    const finalData = {
        ...formData,
        accounttype
    }
    console.log(finalData);
    return(
        <div className="mt-5">
            <form onSubmit={submitHandler} className="flex gap-4 flex-col">
                <div className="flex rounded-3xl border-richblack-700 bg-richblack-700 w-max">
                    <button className={`px-4 py-2 rounded-3xl ${accounttype ==="student" ? "bg-richblack-900 text-white" : "bg-richblack-700 text-richblack-100"}`} onClick={studentClickHandler}>Student</button>
                    <button className={`px-4 py-2 rounded-3xl ${accounttype === "instuctor" ? "bg-richblack-900 text-white" : "bg-richblack-700 text-richblack-100"}`} onClick={inStructorClickHandler}>Administrator</button>
                </div>
                <div className="flex gap-4 mt-1">
                    <label className="w-[50%]">
                        <p>First Name</p>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Anchal"
                            value={formData.firstName}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                    </label>
                    <label className="w-[50%]">
                        <p>Last Name</p>
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
                        <p>Email Address</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="abc@gmail.com"
                            value={formData.email}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                    </label>
    
                </div>
                <div className="flex gap-4 mt-1">
                    <label className="w-[50%] relative">
                        <p>Create Password</p>
                        <input
                            type={createpasswordVisible?("text") : ("password")}
                            name="password"
                            value={formData.password}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                            <div className="absolute bottom-[5px] right-5">
                            {createpasswordVisible?(<AiOutlineEyeInvisible onClick={passwordclickHandler} className="h-[20px] w-[20px]"></AiOutlineEyeInvisible>) : (<MdOutlineVisibility onClick={passwordclickHandler} className="h-[20px] w-[20px]"></MdOutlineVisibility>) }
                            </div>
                           
                    </label>
                    <label className="relative w-[50%]"> 
                        <p>Cofirm password</p>
                        <input
                            type={confirmpasswordVisible?("text") : ("password")}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                            <div className="absolute bottom-[5px] right-3">
                            {confirmpasswordVisible?(<AiOutlineEyeInvisible  onClick={confirmclickHandler} className="h-[20px] w-[20px]"></AiOutlineEyeInvisible>) : (<MdOutlineVisibility  onClick={confirmclickHandler} className="h-[20px] w-[20px]"></MdOutlineVisibility>)}
                            </div>
                            
                    </label>
                </div>
                <div className="w-full"> 
                    <button className="w-full py-2 bg-yellow-500 rounded-md mt-3 mb-1 text-richblack-900 font-semibold">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;