const SignInModal = ({isVisible, onClose}) => {

    if (!isVisible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === 'signInModalContainer') onClose();
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
            id="signInModalContainer" onClick={handleOnClose}>
                <div className="bg-white p-6 rounded-lg drop-shadow-sm flex flex-col">
                    <div className="bg-[#D9D9D9] rounded-lg flex flex-col" style={{width:'700px', height:'350px'}}>
                        <h2 className="m-4 text-lg font-bold">Prijavi se</h2>
                        <form className="w-fit">
                            <input
                                type="text"
                                className="border bg-white rounded-full p-2 opacity-75"
                                style={{width:"500px", marginBottom:'2%', marginLeft:'14%'}}
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                className="border bg-white rounded-full p-2 opacity-75"
                                style={{width:"500px", marginLeft:'14%'}}
                                placeholder="Password"
                            />
                        </form>
                        <div className="flex flex-row justify-around" style={{marginTop:'8%'}}>
                            <button className='bg-[#0ea5e9] text-white rounded-full drop-shadow-md p-2' style={{width:'150px', height:'50px'}}>
                                Aai@Edu
                            </button>
                            <button className='bg-[#0ea5e9] text-white rounded-full drop-shadow-md p-2' style={{width:'150px', height:'50px'}}>
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around" style={{marginTop:'10%'}}>
                        <p className="text-xl font-bold hover:underline">Nemas racun?</p>
                        <p className="text-xl font-bold text-[#0ea5e9] hover:underline">Registriraj se</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInModal;