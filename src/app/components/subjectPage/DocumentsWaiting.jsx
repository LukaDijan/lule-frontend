import DocumentCard from '../cards/documentCard';

const DocumentsWaiting = ({document_groups, courseId}) => {

    const MAPPING = {
        "application/pdf": "/pdf-image.svg"
    }

    const Documents = [
        {imageSrc: '/pdf-image.svg', name: 'Materijali 3'},
        {imageSrc: '/pdf-image.svg', name: 'Materijali 4'},
        {imageSrc: '/word-image.svg', name: 'Materijali 5'},
        {imageSrc: '/word-image.svg', name: 'Materijali 6'},
    ];

    const filterDocumentsApproved = (document) => {
        if (document.status == 'approved') return;

        return <DocumentCard imageSrc={MAPPING[document.content_type]} name={document.name} fileUrl={document.file_url} fileName={document.filename}/>
    }

    return (
        <>
            <div className='rounded-lg px-0 py-0 shadow-lg' style={{marginRight:'40px', marginTop:'60px'}}>
                <div className="bg-[#D9D9D9] w-full rounded-t-lg">
                    <p className='p-4 text-center'>Na cekanju</p>
                </div>
                {document_groups.map(document_group => {
                    return (
                <div className="flex flex-row flex-wrap width-full basis-1/2">
                {document_group.documents.map((document) => (
                                    filterDocumentsApproved(document)
                                ))}
                </div>
                    )
                }
                )}
            </div>
        </>
    );
}

export default DocumentsWaiting;