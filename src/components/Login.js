import React,{ useRef, useState } from 'react'
import Header from './Header';
import { validateData} from "../utils/validateData";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const email= useRef(null)
    const password = useRef(null)
    const [errorMsg,setErrorMsg] = useState(null);

    const handlerSignIn = ()=>{
        setIsSignIn(!isSignIn)}
    const handleValidation = () =>{
        const msg = (validateData(email.current.value, password.current.value));
        setErrorMsg(msg)
    }    

  return (
   <div className=' relative w-full'>

    {/* Netflix Header */}
    <Header/>

    {/* Background image */}
    <div className='absolute' alt="backgroundImg">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"/>
    </div>
   
    {/* signin form */}
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={(e)=> e.preventDefault()} className=' bg-black opacity-80 text-white w-4/12 p-9 rounded-md'>
            <p className='text-2xl font-bold m-4'>{isSignIn ? "Sign In" : "Sign Up"}</p>
            {!isSignIn && <input className='w-full rounded-md bg-gray-700 p-3 my-2 mx-auto' type="text" placeholder='Full Name'/>}
            <input ref={email} className='w-full rounded-md bg-gray-700 p-3 my-2 mx-auto' type="text" placeholder='Email'/>
            <input ref={password} className='w-full rounded-md bg-gray-700 p-3 my-2' type="password" placeholder='password'/>
            <p className='text-red-600 text-md font-bold my-2'> {errorMsg}</p>
            <button onClick={handleValidation} className='w-full bg-red-700 p-3 my-2 rounded-md' type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
           
            <p className='m-3 cursor-pointer' onClick={()=>handlerSignIn()}>
                {isSignIn ? "New to Netflix?Sign Up" : "Allready have account? Sign In"}
            </p>
        </form>
    </div>
   </div>
  )
}

export default Login
