const RegisterModal = ({isVisible, onClose}) => {

    if (!isVisible) return null;

    const handleOnClose = (e) => {
        if (e.target.id == 'registerModalContainer') onClose();
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
            onClick={handleOnClose} id="registerModalContainer">
                <div className="bg-white p-6 rounded-lg drop-shadow-sm flex flex-col">
                    Hello
                </div>
            </div>
        </>
    );
}

export default RegisterModal;