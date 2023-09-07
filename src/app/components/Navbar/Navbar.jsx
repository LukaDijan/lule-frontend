import Logo from '../Navbar/logo';
import Link from 'next/link'

const Navbar = (props) => {
    return (
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
                            props.isLoggedIn ? (
                                <>
                                <Link href="/home"><li className='ml-20 uppercase text-lg hover:font-bold'>Home</li></Link>
                                <Link href="/myProfile"><li className='ml-20 uppercase text-lg hover:font-bold'>Profile</li></Link>
                                <li className='ml-20 uppercase text-lg hover:font-bold'>Search</li>
                                </>
                            ) : (
                                <>
                                <Link href="/signIn"><li className='ml-20 uppercase text-lg hover:font-bold cursor-pointer hover:underline'>Sign in</li></Link>
                                <Link href="/register"><li className='ml-20 uppercase text-lg hover:font-bold cursor-pointer hover:underline'>Register</li></Link>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

//<li className='ml-20 uppercase text-lg hover:font-bold'>Sign in</li>
//<li className='ml-20 uppercase text-lg hover:font-bold'>Register</li>