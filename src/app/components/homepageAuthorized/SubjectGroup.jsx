import SubjectCard from '../cards/subjectCard'

const SubjectGroup = ({label}) => {

    const Subjects = [
        {imageSrc: '/math.jpg', name: 'Matematika 1'},
        {imageSrc: '/programming.jpg', name: 'Programiranje'},
        {imageSrc: '/physics.jpg', name: 'Fizika I'},
        {imageSrc: '/electrical-engineering.jpg', name: 'Elektrotehinka'},
        {imageSrc: '/electronics.jpg', name: 'Elektronika'}
    ]

    return (
        <>
        <div className='flex flex-col flex-wrap' style={{marginLeft:'40px', marginTop:'20px'}}>
        <p className='text-2xl font-bold text-black'>{label}</p>
        <div className="flex flex-row flex-wrap">
            {Subjects.map((subject) => (
                <SubjectCard imageSrc={subject.imageSrc} name={subject.name}/>
            ))}
        </div>
        </div>
        </>
    );
}

export default SubjectGroup;