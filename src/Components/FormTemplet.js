import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import {FcGoogle} from "react-icons/fc";
import backgroundeFrame from "../assets/frame.png"

function FormTemplet({title,desc1, desc2, formType, image, setIsLoggedIn, accounttype, setAccountType}){
    return(
        <div className="bg-richblack-800 flex justify-between text-white h-[90%] mt-[3rem] w-[1160px] max-w--[11/12] mx-auto px-4 py-2">
            <div className="flex flex-col gap-3 w-[45%]">
               <h1 className="text-[1.7rem] font-bold">{title}</h1>  
               <div className="mt-1">
                    <p className="text-[1.1rem]">{desc1}</p>
                    <p className="text-[1rem] italic text-blue-500">{desc2}</p>
               </div>
               <div>
                    {
                        formType==='signup' ? (<SignUpForm setIsLoggedIn={setIsLoggedIn} accounttype={accounttype} setAccountType={setAccountType}></SignUpForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn} accounttype={accounttype} setAccountType={setAccountType}></LoginForm>)
                    }
               </div>
               <div className="flex gap-2 items-center w-[100%]">
                    <div className="h-[2px] bg-[#3e3e3e] w-6/12 rounded-sm"></div>
                    <p>OR</p>
                    <div className="h-[2px] bg-[#3e3e3e] w-6/12 rounded-sm"></div>
               </div>
               <div className="w-[100%] mt-2">
                    <button className="flex gap-4 justify-center items-center w-[100%] googleButton py-2">
                        <FcGoogle></FcGoogle>
                        <h4 className="text-richblack-100">Sign In with Google</h4>
                    </button>
               </div> 
            </div>

            <div className="relative">
                <img src={backgroundeFrame} height="400px" width="400px" className="relative top-4 left-4"></img>
                <img src={image} height="400px" width="400px" className="absolute left-0 top-0"></img>
            </div>

        </div>
    );
}

export default FormTemplet;