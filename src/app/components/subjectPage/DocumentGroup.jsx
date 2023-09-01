import DocumentCard from '../cards/documentCard'
import SubjectHeader from '../subjectPage/SubjectHeader';

const DocumentGroup = () => {

    const Documents = [
        {imageSrc: '/pdf-image.svg', name: 'Materijali 1'},
        {imageSrc: '/pdf-image.svg', name: 'Materijali 2'},
        {imageSrc: '/word-image.svg', name: 'Materijali 3'}
    ];

    return (
        <>
            <div className='flex flex-col' style={{marginLeft:'40px', marginTop:'30px'}}>
            <div className='flex flex-col flex-wrap' style={{marginLeft:'40px', marginTop:'30px'}}>
            <SubjectHeader name="Predavanja"/>
                <div className="flex flex-row flex-wrap">
                    {Documents.map((document) => (
                    <DocumentCard imageSrc={document.imageSrc} name={document.name}/>
                ))}
                </div>
            </div>
            <div className='flex flex-col flex-wrap' style={{marginLeft:'40px', marginTop:'30px'}}>
            <SubjectHeader name="Auditorne"/>
                <div className="flex flex-row flex-wrap">
                    {Documents.map((document) => (
                    <DocumentCard imageSrc={document.imageSrc} name={document.name}/>
                ))}
                </div>
            </div>
            </div>
        </>
    );
}

export default DocumentGroup;