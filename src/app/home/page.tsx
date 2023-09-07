'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import SubjectGroup from '../components/homepageAuthorized/SubjectGroup'
import DocumentGroup from '../components/homepageAuthorized/DocumentGroup'

export default function home()
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('isLoggedIn');
        if (isUserLoggedIn) setIsLoggedIn(true);
    }, []);

    if (!isLoggedIn) {
    return (
        <>
        <div className="bg-cover bg-center" style={{backgroundImage: "url('/books.jpg')", minHeight: "100vh"}}>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <nav className="w-full h-20 shadow-xl rounded-b-xl bg-[#D9D9D9]">
            <div className='flex justify-between items-center h-full px-4'>
                <img
                src="/Lule-logo.png"
                width="110"
                height="110"
                alt="Logo"
                style={{marginTop:"20px"}}/>
                <div>
                    <ul className='hidden sm:flex' style={{marginRight:"15px"}}>
                                <Link href="/signIn"><li className='ml-20 uppercase text-lg hover:font-bold cursor-pointer hover:underline'>Sign in</li></Link>
                                <Link href="/register"><li className='ml-20 uppercase text-lg hover:font-bold cursor-pointer hover:underline'>Register</li></Link>
                                <Link href="/blog"><li className='ml-20 uppercase text-lg hover:font-bold cursor-pointer hover:underline'>Blog</li></Link>
                    </ul>
                </div>
            </div>
            </nav>
                <div className="flex justify-center items-center h-screen">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-full p-2 bg-[#D9D9D9] opacity-75"
                        style={{width:"450px"}}
                        placeholder="Search..."
                    />
                </div>
            </div>
        </div>
        </>
    );
    }

    return (
        <>
            <div>
                <Navbar isLoggedIn={isLoggedIn}/>
                <SubjectGroup label="Moji kolegij"/>
                <DocumentGroup/>
            </div>
        </>
    )
}