import Logo from '../Navbar/logo';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = (props) => {

    const router = useRouter()

    const handleLogOut = () => {

        if (typeof window !== 'undefined') {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
          }
          

          window.location.reload();
    }

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
                                <Link href="/home"><li className='ml-20 uppercase text-lg hover:font-bold cursor-pointer hover:underline'>Home</li></Link>
                                <Link href="/myProfile"><li className='ml-20 uppercase text-lg hover:font-bold cursor-pointer hover:underline'>Profile</li></Link>
                                <li className='ml-20 uppercase text-lg hover:font-bold'>Search</li>
                                <li className='ml-20 uppercase text-lg hover:font-bold cursor-pointer hover:underline' onClick={handleLogOut}>Log out</li>
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