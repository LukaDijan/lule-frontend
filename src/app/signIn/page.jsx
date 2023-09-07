'use client'

import { useRouter } from 'next/navigation'

import { useState } from "react";

export default function SignIn()
{

    const router = useRouter()

    const Users = [
        {
            username: 'Luka',
            password: '1234'
        }
    ]

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

            const user = Users.find(
                (user) => user.username === email && user.password === password
            );

            if (user) {
                setError('');
                alert('Login successful!');
                if (typeof window !== 'undefined') {
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('user', JSON.stringify(user));
                  }
                  
            } else {
                setError("Invalid credentials");
            }

        router.push("/home");
        
    }

    return (
        <>
        <div className="flex justify-center items-center h-screen bg-[#D9D9D9]">
            <div className="bg-white p-6 rounded-lg drop-shadow-sm flex flex-col shadow">
                    <div className="bg-[#D9D9D9] rounded-lg flex flex-col" style={{width:'700px', height:'350px'}}>
                        <h2 className="m-4 text-lg font-bold">Prijavi se</h2>
                        <form className="w-fit">
                            <input
                                id="email"
                                type="text"
                                className="border bg-white rounded-full p-2 opacity-75"
                                style={{width:"500px", marginBottom:'2%', marginLeft:'14%'}}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                id="password"
                                type="text"
                                className="border bg-white rounded-full p-2 opacity-75"
                                style={{width:"500px", marginLeft:'14%'}}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </form>
                        <div className="flex flex-row justify-around" style={{marginTop:'8%'}}>
                            <button className='bg-[#0ea5e9] text-white rounded-full drop-shadow-md p-2' style={{width:'150px', height:'50px'}}>
                                Aai@Edu
                            </button>
                            <button onClick={(e) => {handleSubmit(e)}} className='bg-[#0ea5e9] text-white rounded-full drop-shadow-md p-2' style={{width:'150px', height:'50px'}}>
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around" style={{marginTop:'10%'}}>
                        <p className="text-xl font-bold hover:underline cursor-pointer">Nemas racun?</p>
                        <p className="text-xl font-bold text-[#0ea5e9] hover:underline cursor-pointer">Registriraj se</p>
                    </div>
                </div>
        </div>
        </>
    );
}