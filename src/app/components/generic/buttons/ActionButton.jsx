import Image from 'next/image'

const ActionButton = ({label, iconSrc, fileUrl=null}) => {

    const handleDownload = () => {
        if (fileUrl) {
            window.open(fileUrl, '_blank');
        } else {
            return false;
        }
    }

    return (
        <>
            <button className='bg-[#0ea5e9] text-white rounded-lg drop-shadow-md p-2' onClick={handleDownload} style={{width:'120px', height:'100px'}}>
                <div className='flex flex-col'>
                {label}
                <div className='flex flex-row justify-center mt-3'>
                <Image
                    src={iconSrc}
                    width={25}
                    height={25}
                    alt={label}
                />
                </div>
                </div>
            </button>
        </>
    );
}

export default ActionButton;