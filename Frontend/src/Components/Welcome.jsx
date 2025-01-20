import React from "react";
import EastIcon from '@mui/icons-material/East';
function Welcome() {
  return(

<div className="h-screen md:h-[80vh] lg:h-[90vh] bg-fixed bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2024/10/29/19/57/ai-generated-9159929_640.png')]">
    <div className="flex flex-col items-center gap-2 justify-center h-full text-gray-100">
        <h2 className="text-3xl font-bold">Welcome to our website</h2>
        <p className="text-xl">Convert yout Imagination into Art</p>
        <div className="flex justify-center gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                Get Started
                <EastIcon fontSize="small"/>
            </button>  
            <button className="bg-transparent hover:bg-gray-400 text-gray-50 border-[3px] border-gray-400 font-bold py-2 px-4 rounded-full mt-4">
                About us
            </button>
        </div>
    </div>      
</div>



  )
}

export default Welcome;
