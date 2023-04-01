import {AiOutlineEyeInvisible} from "react-icons/ai"
import {MdOutlineVisibility} from "react-icons/md"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios';
import { postData } from "../utils/apiCall";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpForm(props){
    const setIsLoggedIn = props.setIsLoggedIn
    const accounttype = props.accounttype;
    let setAccountType = props.setAccountType;
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
    
    async function submitHandler(event){
        console.log(formData.password);
        console.log(formData.confirmPassword);

        if(formData.password!==formData.confirmPassword){
            event.preventDefault();
            toast.error("Password Doesn't match");
            return;
        }
        event.preventDefault();
         createUserWithEmailAndPassword(auth, formData.email, formData.confirmPassword)
        .then(async (userCredential) => {
            
            if(accounttype=="student"){
                const data = await postData("https://studynotion-11b19-default-rtdb.firebaseio.com/student.json",formData)
                nevigate("/studentLogin");
                console.log(data,"===================================================================")

                setIsLoggedIn(true);
            }
            else{
                const data = await postData("https://studynotion-11b19-default-rtdb.firebaseio.com/admin.json",formData)
                nevigate("/administratordashboard");
                localStorage.setItem("userid",data.name)
                setIsLoggedIn(true);
            }
            console.log(userCredential)
            // localStorage.setItem('usertoken',userCredential.user.getIdToken());
            localStorage.setItem('usertoken',userCredential.user.accesstoken);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(error)
            
        });
 

        toast.success("successfully Created");
        
    }

    const finalData = {
        ...formData,
        accounttype
    }
    console.log(finalData);
    return(
        <div className="mt-5">
            <form onSubmit={submitHandler} className="flex gap-4 flex-col">
               
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
                        <p>Confirm password</p>
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
                    <button className="w-full py-2 bg-yellow-500 rounded-md mt-3 mb-1 text-richblack-900 font-semibold"
                    
                    >Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;