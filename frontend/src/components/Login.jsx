import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-screen  bg-blue-200 box-border flex justify-center items-center ' >
        <div className="glass md:w-[30rem] h-[40rem] bg-[#2ba9ad7a] p-2 box-border rounded-sm  ">
            <h1 className="text-5xl mx-auto w-[18.5rem] uppercase font-bold text-white mt-8" >Restaurant</h1>
            <h1 className="text-5xl font-bold text-white mt-8">Login</h1>
            <form action="" method="post" className="flex  flex-col gap-y-10 mt-16">
                <input type="email" name="email" id="email" placeholder="Email Address" className="input input-bordered h-16 bg-transparent input-info mx-5" />

                <input type="password" name="password" id="password" placeholder="Enter Your Password" className="input  h-16 input-bordered input-info mx-5 bg-transparent" />

            </form>
        </div>
    </div>
  )
}

export default Login