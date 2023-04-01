import { Link, useNavigate } from 'react-router-dom';

function NavBar({isLoggedIn, setIsLoggedIn}){

    const nevigate = useNavigate();
    function logOutHandler(){
        setIsLoggedIn(false);
        localStorage.clear();
        nevigate("/");
    }
    return(
        <div className='w-full bg-richblack-800 py-1 flex justify-center items-center mt-5'>
            <div className='flex text-richblack-100 w-[1160px] max-w-[11/12] justify-between items-center px-2'>
                
                <div>
                    <ul className='flex gap-7'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rule">Rules and Regulation</Link>
                        </li>
                        {/* <li>
                            <Link to="/">Support</Link>
                        </li> */}
                    </ul>
                </div>
                <div className='flex gap-5'>
                    { !isLoggedIn &&
                        <Link to="/signup">
                            <button className='bg-[#3d3d3d] px-3 py-1 rounded-sm flex justify-center items-center border-x-richblack-700'>SignUp</button>
                        </Link>
                    }
                    { !isLoggedIn &&
                        <Link to="/login">
                            <button className='bg-[#3d3d3d] px-3 py-1 rounded-sm flex justify-center items-center border-x-richblack-700'>Log In</button>
                        </Link>
                    }
                    { isLoggedIn &&
                        <Link to="/">
                            <button onClick={logOutHandler} className='bg-[#3d3d3d] px-3 py-1 rounded-sm flex justify-center items-center border-x-richblack-700'>Log Out</button>
                        </Link>
                    }
                    { isLoggedIn &&
                        <Link to="/dashboard">
                            <button className='bg-[#3d3d3d] px-3 py-1 rounded-sm flex justify-center items-center border-x-richblack-700'>Dashboard</button>
                        </Link>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default NavBar;