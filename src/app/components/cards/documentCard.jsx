'use client'

import Image from 'next/image'
import FileModal from '../../components/generic/Modal/FileModal'
import FileModalAdmin from '../../components/generic/Modal/FileModalAdmin'
import React, { useState, useContext } from 'react'
import { AdminContext } from '@/app/page'

const DocumentCard = (props) => {

    const [showFileModal, setShowFileModal] = useState(false);
    const [showFileModalAdmin, setShowFileModalAdmin] = useState(false);

    const handleOnClose = () => {setShowFileModal(false)};
    const handleOnCloseAdmin = () => {setShowFileModalAdmin(false)};

    const isAdmin = useContext(AdminContext);

    return (
        <>
            <div className='flex flex-col rounded-lg shadow-xl w-fit h-fit m-4 p-2 justify-items-center cursor-pointer' style={{maxWidth:'100px', minHeight:'160px'}} onClick={() => {
                if (!isAdmin) {
                    setShowFileModal(true);
                } else {
                    setShowFileModalAdmin(true);
                }
            }}>
            <div className='bg-[#D9D9D9] rounded-lg'>
            <Image
                src={props.imageSrc}
                width={100}
                height={100}
                alt={props.name}
            />
            </div>
            <p className='mt-2 text-center'>{props.name}</p>
            </div>
            <FileModal isVisible={showFileModal} onClose={handleOnClose} fileUrl={props.fileUrl} fileName={props.fileName}/>
            <FileModalAdmin isVisible={showFileModalAdmin} fileUrl={props.fileUrl} fileName={props.name} status={props.status}
            courseId={props.courseId} documentId={props.documentId} onClose={handleOnCloseAdmin}/>
        </>
    );
}

export default DocumentCard;