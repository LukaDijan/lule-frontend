import DocumentCard from '../cards/documentCard'

const DocumentGroup = () => {

    const Documents = [
        {imageSrc: '/pdf-image.svg', name: 'Materijali 1'},
        {imageSrc: '/pdf-image.svg', name: 'Materijali 2'},
        {imageSrc: '/word-image.svg', name: 'Materijali 3'}
    ];

    return (
        <>
        <div className='flex flex-col flex-wrap' style={{marginLeft:'40px', marginTop:'20px'}}>
            <p className='text-2xl font-bold text-black'>Popularni kolegij</p>
                <div className="flex flex-row flex-wrap">
                    {Documents.map((document) => (
                    <DocumentCard imageSrc={document.imageSrc} name={document.name}/>
                ))}
                </div>
        </div>
        </>
    );
}

export default DocumentGroup;