import Template from "../Components/FormTemplet";
import vgecImage from '../assets/VGEC.jpg';

function Login({setIsLoggedIn,  accounttype, setAccountType}){
    return(
        <Template
            title="Welcome Back"
            desc1="Hostel life is an emotion combined with many emotions."
            desc2="Education to future-proof your career."
            image={vgecImage}
            formType="login"
            setIsLoggedIn={setIsLoggedIn}
            accounttype = {accounttype}
            setAccountType={setAccountType}
    />
    );
}

export default Login;