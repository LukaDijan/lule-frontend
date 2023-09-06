'use client'

import React from 'react'
import CloseButton from '../buttons/CloseButton';
import ActionButton from '../buttons/ActionButton'

const FileModal = ({isVisible, onClose}) => {

    if (!isVisible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === 'fileModalContainer') onClose();
    }

    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'
            onClick={handleOnClose} id='fileModalContainer'>
                <div className='bg-white p-6 rounded-lg drop-shadow-sm flex flex-col'>
                    <div className='p-2 drop-shadow-md bg-[#D9D9D9] rounded-lg flex justify-center' style={{width:'600px', height:'420px'}}>
                        <iframe src='/knjiga-mat.pdf' width={450} height={400} className='p-2'></iframe>
                    </div>
                    <div className='flex flex-row justify-center'>
                    <p className='text-md mt-2 font-bold'>knjiga-mat.pdf</p>
                    </div>
                    <div id='buttonGroup' className='flex flex-row justify-between' style={{marginTop:'12%'}}>
                        <ActionButton label="Dodaj u favorite" iconSrc="/star-icon-2.svg"/>
                        <ActionButton label="Dijeli poveznicu" iconSrc="/link-icon.svg"/>
                        <ActionButton label="Predlozi izmjenu" iconSrc="/edit-icon.svg"/>
                        <ActionButton label="Preuzmi" iconSrc="/download-icon.svg"/>
                    </div>
                    <div className='flex flex-row justify-end' style={{marginTop:'8%'}}>
                        <CloseButton onClickHandler={onClose}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FileModal;