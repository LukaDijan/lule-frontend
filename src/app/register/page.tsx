export default function register()
{
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-[#D9D9D9]">
            <div className="bg-white p-6 rounded-lg drop-shadow-sm flex flex-col shadow" style={{height:'650px'}}>
                    <div className="bg-[#D9D9D9] rounded-lg flex flex-col" style={{width:'700px', height:'480px'}}>
                        <h2 className="m-4 text-lg font-bold">Registriraj se</h2>
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
                                style={{width:"500px", marginLeft:'14%', marginBottom:'2%'}}
                                placeholder="Lozinka"
                            />
                            <input
                                type="text"
                                className="border bg-white rounded-full p-2 opacity-75"
                                style={{width:"500px", marginLeft:'14%', marginBottom:'2%'}}
                                placeholder="Ponovljena lozinka"
                            />
                            <input
                                type="text"
                                className="border bg-white rounded-full p-2 opacity-75"
                                style={{width:"500px", marginLeft:'14%', marginBottom:'2%'}}
                                placeholder="Ime"
                            />
                            <input
                                type="text"
                                className="border bg-white rounded-full p-2 opacity-75"
                                style={{width:"500px", marginLeft:'14%', marginBottom:'2%'}}
                                placeholder="Smjer"
                            />
                            <input
                                type="text"
                                className="border bg-white rounded-full p-2 opacity-75"
                                style={{width:"500px", marginLeft:'14%', marginBottom:'3%'}}
                                placeholder="Semestar"
                            />
                            <label className="text-sm font-extralight" style={{marginLeft:'14%', marginBottom:'2%'}}>profile picture</label>
                            <input
                                type="file"
                                className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4 file:rounded-full
                                file:border-0 file:text-sm file:font-semibold
                                file:bg-[#0ea5e9] file:text-white
                                hover:file:bg-[#0369a1] cursor-pointer"
                                style={{width:"500px", marginLeft:'14%'}}
                            />
                        </form>
                        <div className="flex flex-row justify-center" style={{marginTop:'12%'}}>
                            <button className='bg-[#0ea5e9] text-white rounded-full drop-shadow-md p-2' style={{width:'200px', height:'50px'}}>
                                Registriraj se
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}