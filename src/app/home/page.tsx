import Navbar from '../components/Navbar/Navbar';

export default function home()
{
    return (
        <>
        <div className="bg-cover bg-center" style={{backgroundImage: "url('/books.jpg')", minHeight: "100vh"}}>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                <Navbar isLoggedIn={false}/>
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