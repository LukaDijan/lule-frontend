import Logo from '../Navbar/logo';

const Navbar = () => {
    return (
        <nav className="fixed w-full h-20 shadow-xl rounded-b-xl bg-[#D9D9D9]">
            <div className='flex justify-between items-center h-full px-4'>
                <img
                src="/Lule-logo.png"
                width="110"
                height="110"
                alt="Logo"
                style={{marginTop:"20px"}}/>
                <div>
                    <ul className='hidden sm:flex' style={{marginRight:"15px"}}>
                        <li className='ml-20 uppercase text-lg hover:font-bold'>Sign in</li>
                        <li className='ml-20 uppercase text-lg hover:font-bold'>Register</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;