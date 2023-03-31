import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {MdOutlineVisibility} from "react-icons/md"
function LogInForm({setIsLoggedIn}){
    
    const [formData, setFormdata] = useState({
        email:"",
        password:""
    });
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    
    function changeHandler(event){
        setFormdata((prev)=>({
            ...prev,
            [event.target.name] : event.target.value 
        }))
    }
    
    const nevigate = useNavigate();
    
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        nevigate("/dashboard");
    }
    
    function clickHandler(){
        setPasswordVisible(!passwordVisible);
    }
    return(
        <div>
            <form onSubmit={submitHandler} className="flex gap-4 flex-col">
                <label className="w-[100%]">
                    <p>Email <sup className='text-pink-200'>*</sup></p>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter Email Id"
                    onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                </label>
                <label className="relative">
                    <p>Password <sup className='text-pink-200'>*</sup></p>
                    <input
                    type={passwordVisible?("text") : ("password")}
                    name="password"
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler} required className="mt-1 bg-richblack-700 px-2 py-1 rounded-md w-[100%]"></input>
                    <div className="absolute bottom-[5px] right-2">
                        {passwordVisible?(<AiOutlineEyeInvisible  onClick={clickHandler} className="w-[20px] h-[20px]"></AiOutlineEyeInvisible>) :  (<MdOutlineVisibility  onClick={clickHandler} className="w-[20px] h-[20px]"></MdOutlineVisibility>)}
                    </div>
                    <p className="absolute text-[0.8rem] mt-1 text-blue-500 right-0">Forgot Password</p> 
                </label>
                
                <button className="w-[100%] bg-yellow-500 rounded-md mt-7 py-2 font-semibold text-richblack-900 mb-3">Sign In</button>
            </form>
        </div>
    );
}

export default LogInForm;