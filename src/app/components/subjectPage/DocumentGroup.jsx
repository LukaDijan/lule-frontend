import DocumentCard from '../cards/documentCard'
import SubjectHeader from '../subjectPage/SubjectHeader';

const MAPPING = {
    "application/pdf": "/pdf-image.svg"
}

const DocumentGroup = ({ document_groups }) => {
    return (
        <>
            <div className='flex flex-col' style={{ marginLeft: '40px', marginTop: '30px' }}>
                <div className='flex flex-col flex-wrap' style={{ marginLeft: '40px', marginTop: '30px' }}>
                    {document_groups.map(document_group => {
                        return (<>
                            <SubjectHeader name={document_group.name} />
                            <div className="flex flex-row flex-wrap">
                                {document_group.documents.map((document) => (
                                    <DocumentCard imageSrc={MAPPING[document.content_type]} name={document.name} fileUrl={document.file_url} fileName={document.filename}/>
                                ))}
                            </div>
                        </>)
                    })
                    }
                </div>
            </div>
        </>
    );
}

export default DocumentGroup;