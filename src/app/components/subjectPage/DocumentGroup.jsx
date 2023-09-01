import DocumentCard from '../cards/documentCard'

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
            <p className='text-2xl font-bold text-black'>Popularni materijali</p>
                <div className="flex flex-row flex-wrap">
                    {Documents.map((document) => (
                    <DocumentCard imageSrc={document.imageSrc} name={document.name}/>
                ))}
                </div>
            </div>
            <div className='flex flex-col flex-wrap' style={{marginLeft:'40px', marginTop:'30px'}}>
            <p className='text-2xl font-bold text-black'>Auditorne</p>
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