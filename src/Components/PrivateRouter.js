import {Navigate} from 'react-router-dom';
const PrivateRouter = ({isLoggedIn, children})=>{
    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to="/login"></Navigate>
    }
}

export default PrivateRouter;