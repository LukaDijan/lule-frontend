'use client'

import { useState } from 'react';
import SignInModal from '../components/generic/Modal/SignInModal';

export default function home()
{

    const [showSignInModal, setShowSignInModal] = useState(false);

    const handleOnClose = () => {setShowSignInModal(false)};

    const isLoggedIn = false;

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
                        {
                            isLoggedIn ? (
                                <>
                                <li className='ml-20 uppercase text-lg hover:font-bold'>Home</li>
                                <li className='ml-20 uppercase text-lg hover:font-bold'>Profile</li>
                                <li className='ml-20 uppercase text-lg hover:font-bold'>Search</li>
                                </>
                            ) : (
                                <>
                                <li className='ml-20 uppercase text-lg hover:font-bold' onClick={() => {setShowSignInModal(true)}}>Sign in</li>
                                <li className='ml-20 uppercase text-lg hover:font-bold'>Register</li>
                                </>
                            )
                        }
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
        <SignInModal isVisible={showSignInModal} onClose={handleOnClose}/>
        </>
    );
}