function Home(){
    return(
        <div className="bg-richblack-800 text-richblack-100 h-[90%] max-w-[11/12] text-[1.2rem] ml-36 mt-14">
            <div>
            <p>The institute provides excellent accommodation to its students. The students are provided with all the amenities so that their stay here becomes a worthwhile experience.</p>

            <br/>

            <p>The institute has a boys hostel with capacity of 540 students and a girls hostel with capacity of 180 students. There are messes in the both hostel campus. Many newspapers and magazines are subscribed for the hostel library. Entertainment facilities like TV room, badminton room, gymnasium are also available in hostel. Outdoor and indoor games are also provided for the hostelites. University health centre has extended its services to the students of our hostel. The hostel is administered by the rector and four wardens.</p>
            </div>
            
            <div className="flex justify-evenly mt-10">
            <div className="w-[40%] flex flex-col items-center justify-center border-richblack-200 ">
            <h1 className="text-center mb-4 font-bold">Boys Hostel</h1>

                <table className="border border-2px border-collapse  border-richblack-200 w-[60%]">
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        Number of Rooms
                    </td>
                    <td className="border border-2px border-collapse border-richblack-200">
                        180
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        Capacity
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        540
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        Guest Rooms
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        2
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        T.V. Room
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        1
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        Mess
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        1
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        Reading Room
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        1
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td>
                        Hostel Office
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        1
                    </td>
                </tr>
                </table>

            </div>
              
              <div className="w-[40%] flex flex-col items-center justify-center">
                <h1 className="text-center mb-4 font-bold">Girls Hostel</h1>
                <table className="border border-2px border-collapse  border-richblack-200 w-[60%]">
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        Number of Rooms
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        60
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        Capacity
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        180
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                     Guest Room
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        2
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200">
                    <td className="border border-2px border-collapse  border-richblack-200">
                        T.V. Room
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        1
                    </td>
                </tr>
                <tr className="border border-2px border-collapse  border-richblack-200" >
                    <td className="border border-2px border-collapse  border-richblack-200">
                        Mess
                    </td>
                    <td className="border border-2px border-collapse  border-richblack-200">
                        1
                    </td>
                </tr>
                </table>
              </div>
               
                
        </div>

        </div>
    );
}

export default Home;