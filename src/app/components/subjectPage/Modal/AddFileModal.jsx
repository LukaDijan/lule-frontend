const AddFileModal = ({isVisible, onClose}) => {

    if (!isVisible) return null;

    const handleOnClose = (e) => {
        if (e.target.id == 'addFileModalContainer') onClose();
    }

    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={handleOnClose} id="addFileModalContainer">
            <div className="bg-white p-6 rounded-lg drop-shadow-sm flex flex-col" style={{width:'30%', height:'60%'}}>
                <form>
                <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-full
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-[#0ea5e9] file:text-white
                    hover:file:bg-[#0369a1] cursor-pointer"
                    style={{marginLeft:'30%', marginBottom:'10%'}}
                            />
                <label style={{marginLeft:'5%', marginRight:'4%'}}>Opis</label>
                <textarea className="rounded-lg shadow-md border-solid border-[#D9D9D9] bg-[#f8f8f8] border-2" style={{width:'60%', height:'80%'}}/>

                <select id="scriptType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" style={{marginTop:'8%', width:'50%', marginLeft:'20%'}}>
                    <option selected>Vrsta</option>
                    <option value="Predavanja">Predavanja</option>
                    <option value="Auditorne">Auditorne</option>
                </select>

                </form>
                <div className="flex flex-row justify-around" style={{marginTop:'35%'}}>
                    <button className='bg-[#22c55e] text-white rounded-lg drop-shadow-md' style={{width:'120px', height:'50px'}}>Dodaj</button>
                    <button onClick={onClose} className='bg-[#dc2626] text-white rounded-lg drop-shadow-md' style={{width:'120px', height:'50px'}}>Zatvori</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default AddFileModal;