const CloseButton = ({onClickHandler}) => {
    return (
        <>
            <button onClick={onClickHandler} className='bg-[#dc2626] text-white rounded-lg drop-shadow-md' style={{width:'120px', height:'50px'}}>Close</button>
        </>
    );
}

export default CloseButton;