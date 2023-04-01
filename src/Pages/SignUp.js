
import Template from "../Components/FormTemplet";
import hostelImg from "../assets/Hostel.png"
function SignUp({setIsLoggedIn,  accounttype, setAccountType}){
    return(
        <div>
            <Template
                title="Make your work easy with us"
                desc1="Enhance your experience with hostel management."
                desc2="Education to future-proof your career."
                image={hostelImg}
                formType="signup"
                setIsLoggedIn={setIsLoggedIn}
                accounttype = {accounttype}
                setAccountType={setAccountType}
            />
        </div>
    );
}

export default SignUp;