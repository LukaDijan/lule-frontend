'use client'

import { useState } from 'react';
import DocumentCard from '../cards/documentCard'
import SubjectHeader from '../subjectPage/SubjectHeader';

const MAPPING = {
    "application/pdf": "/pdf-image.svg"
}

const filterWaiting = (document, props) => {
    if (document.status == 'pending') return;

    return <DocumentCard imageSrc={MAPPING[document.content_type]} name={document.name} fileUrl={document.file_url}
    fileName={document.filename} status={document.status} courseId={props.courseId} documentId={document.id}/>
}

const DocumentGroup = (props) => {


    return (
        <>
            <div className='flex flex-col' style={{ marginLeft: '40px', marginTop: '30px' }}>
                <div className='flex flex-col flex-wrap' style={{ marginLeft: '40px', marginTop: '30px' }}>
                    {props.document_groups.map(document_group => {
                        return (<>
                            <SubjectHeader name={document_group.name} subjectId={props.courseId} />
                            <div className="flex flex-row flex-wrap">
                                {document_group.documents.map((document) => (
                                    filterWaiting(document, props)
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

//<DocumentCard imageSrc={MAPPING[document.content_type]} name={document.name} fileUrl={document.file_url} fileName={document.filename}/>