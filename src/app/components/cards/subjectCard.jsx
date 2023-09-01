import Image from 'next/image'

const SubjectCard = (props) => {
    return (
        <>
        <div className="bg-white rounded-lg shadow-lg w-fit h-fit m-4">
            <Image
                src={props.imageSrc}
                width={120}
                height={60}
                alt={props.name}
                className='rounded-t-lg hover:scale-25'
                style={{maxHeight: "60px"}}
            />
            <div className='bg-[#D9D9D9] rounded-b-lg p-2 hover:scale-25'>
                <h3>{props.name}</h3>
            </div>
        </div>
        </>
    );
}

export default SubjectCard;