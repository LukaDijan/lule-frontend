import CloseButton from '../buttons/CloseButton';

const FileModalAdmin = ({isVisible, onClose}) => {

    if (!isVisible) return null;

    const handleOnClose = (e) => {
        if (e.target.id == 'fileModalAdminContainer') onClose();
    }

    return (
        <>
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'
            onClick={handleOnClose} id='fileModalAdminContainer'>
                <div className='bg-white p-6 rounded-lg drop-shadow-sm flex flex-col'>
                    <div className='p-2 drop-shadow-md bg-[#D9D9D9] rounded-lg flex justify-center' style={{width:'600px', height:'420px'}}>
                        <iframe src='/knjiga-mat.pdf' width={450} height={400} className='p-2'></iframe>
                    </div>
                    <div className='flex flex-row justify-center'>
                    <p className='text-md mt-2 font-bold'>knjiga-mat.pdf</p>
                    </div>
                    <div className="flex flex-row justify-between" style={{marginTop:'10%'}}>
                        <textarea
                            className="shadow border-2 border-[#D9D9D9] p-2 rounded-lg"
                            placeholder="Dodajte poruku..."
                        />
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="shadow rounded-lg p-2 mr-2" style={{width: "100px", height:'30px'}}>Na cekanju</div>
                                <div className="rounded-full bg-yellow-400" style={{width: '30px', height:'30px'}}></div>
                            </div>
                            <div className='flex flex-col mt-4'>
                            <button className='bg-[#22c55e] text-white rounded-lg drop-shadow-md' style={{width:'120px', height:'30px'}}>Odobri</button>
                            <button className='bg-[#dc2626] text-white rounded-lg drop-shadow-md mt-2' style={{width:'120px', height:'30px'}}>Odbij</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end' style={{marginTop:'8%'}}>
                        <CloseButton onClickHandler={onClose}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FileModalAdmin;