import Image from 'next/image'

const DocumentCard = (props) => {
    return (
        <>
            <div className='flex flex-col rounded-lg shadow-xl w-fit h-fit m-4 p-2 justify-items-center'>
            <div className='bg-[#D9D9D9] rounded-lg'>
            <Image
                src={props.imageSrc}
                width={100}
                height={100}
                alt={props.name}
            />
            </div>
            <p className='mt-2'>{props.name}</p>
            </div>
        </>
    );
}

export default DocumentCard;