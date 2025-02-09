"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();
  console.log(session)

  if (session == null) {
    return (
      <div className="flex justify-center  py-4 h-[100vh] bg-slate-400" >
        <div className="flex  justify-between items-center  bg-slate-500 rounded-[20px] w-[80vw]  fixed py-3 px-5 "  >
          <h1 className="text-white font-bold">User </h1>
          <Link href="/auth/login" className="bg-blue-500 py-2 text-white  px-4 rounded-[10px] hover:bg-blue-600  hover:text-slate-300" >login</Link>
        </div>
        <div className="flex justify-center items-center w-[100vw] h-[90vh]">
          <h1 className="text-white font-bold text-[30px]">
            Access Denied
          </h1>
        
        </div>

      </div>
    );
  }
  else if (session != null) {
    return (
      <div className="flex justify-center  py-4 h-[100vh] bg-slate-400" >
        <div className="flex  justify-between items-center  bg-slate-500 rounded-[20px] w-[80vw]  fixed py-3 px-5 "  >
        <div className="flex justify-center items-center"><img src={session.user.image} /> <h1 className="text-white font-bold"> {session.user.name}</h1></div> 
          <button className="bg-blue-500 py-2 text-white  px-4 rounded-[10px] hover:bg-blue-600  hover:text-slate-300" onClick={() => signOut()}>Sign Out</button>
        </div>
        <div className="flex justify-center items-center w-[100vw] h-[90vh]">
          <h1 className="text-white font-bold text-[30px]">
            Welcome { session.user.name}
          </h1>
          
        </div>

      </div>
    );
  }
}