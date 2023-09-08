import SubjectCard from '../cards/subjectCard'

const SubjectGroup = ({label, subjects}) => {
    return (
        <>
        <div className='flex flex-col flex-wrap' style={{marginLeft:'40px', marginTop:'20px'}}>
        <p className='text-2xl font-bold text-black'>{label}</p>
        <div className="flex flex-row flex-wrap">
            {subjects.map((subject) => (
                <a href={`/subject/${subject.id}`}>
                    <SubjectCard imageSrc={subject.imageSrc} name={subject.name}/>
                </a>
            ))}
        </div>
        </div>
        </>
    );
}

export default SubjectGroup;