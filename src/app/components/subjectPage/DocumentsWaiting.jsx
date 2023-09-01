import DocumentCard from '../cards/documentCard';

const DocumentsWaiting = () => {

    const Documents = [
        {imageSrc: '/pdf-image.svg', name: 'Materijali 3'},
        {imageSrc: '/pdf-image.svg', name: 'Materijali 4'},
        {imageSrc: '/word-image.svg', name: 'Materijali 5'},
        {imageSrc: '/word-image.svg', name: 'Materijali 6'}
    ];

    return (
        <>
            <div className='rounded-lg px-0 py-0 shadow-lg' style={{marginRight:'40px', marginTop:'60px'}}>
                <div className="bg-[#D9D9D9] w-full rounded-t-lg">
                    <p className='p-4 text-center'>Na cekanju</p>
                </div>
                <div className="flex flex-row flex-wrap basis-1/2">
                {Documents.map((document) => (
                        <DocumentCard imageSrc={document.imageSrc} name={document.name}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DocumentsWaiting;