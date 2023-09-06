'use client'

import Image from 'next/image'
import FileModal from '../../components/generic/Modal/FileModal'
import React, { useState } from 'react'

const DocumentCard = (props) => {

    const [showFileModal, setShowFileModal] = useState(false);

    const handleOnClose = () => {setShowFileModal(false)};

    return (
        <>
            <div className='flex flex-col rounded-lg shadow-xl w-fit h-fit m-4 p-2 justify-items-center' onClick={() => {setShowFileModal(true)}}>
            <div className='bg-[#D9D9D9] rounded-lg'>
            <Image
                src={props.imageSrc}
                width={100}
                height={100}
                alt={props.name}
            />
            </div>
            <p className='mt-2'>{props.name}</p>
            </div>
            <FileModal isVisible={showFileModal} onClose={handleOnClose}/>
        </>
    );
}

export default DocumentCard;