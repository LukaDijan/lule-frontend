'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import AddFileModal from '../subjectPage/Modal/AddFileModal'

const SubjectHeader = (props) => {

    const [showAddFileModal, setShowAddFileModal] = useState(false);

    const handleOnClose = () => {setShowAddFileModal(false)};

    return (
        <>
            <div className='flex flex-row'>
            <p className='text-2xl font-bold text-black mr-2'>{props.name}</p>
            <Image
                src='/plus-icon-green.svg'
                height={26}
                width={26}
                alt='plus icon'
                onClick={() => {setShowAddFileModal(true)}}
                className='cursor-pointer'
            />
            </div>
            <AddFileModal isVisible={showAddFileModal} onClose={handleOnClose} subjectId={props.subjectId}/>
        </>
    );
}

export default SubjectHeader;