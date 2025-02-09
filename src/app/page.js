"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();

  if (session==null) {
    return (
      <div>
        <p>Access Denied </p>
        <Link href="/auth/login" className="bg-blue-500 px-3  mt-2 py-2 rounded-[10px] text-white ">login</Link>
      </div>
    )
  }
  else if(session!=null) {
    return (
      <div>
        <h1>Welcome, {session.user.email}</h1>
        <h1>Welcome, {session.user.name}</h1>
        <h1>your id: {session.user.id}</h1>
        <button className="bg-blue-500 py-2 text-white  px-4 rounded-[10px] hover:bg-blue-600  hover:text-slate-300" onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }
}