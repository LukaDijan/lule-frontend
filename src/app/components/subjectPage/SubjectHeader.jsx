import Image from 'next/image'

const SubjectHeader = (props) => {
    return (
        <>
            <div className='flex flex-row'>
            <p className='text-2xl font-bold text-black mr-2'>{props.name}</p>
            <Image
                src='/plus-icon.svg'
                height={26}
                width={26}
                alt='plus icon'
            />
            </div>
        </>
    );
}

export default SubjectHeader;