'use client'

import Image from 'next/image';
import DocumentGroup from '../../components/subjectPage/DocumentGroup'
import DocumentsWaiting from '../../components/subjectPage/DocumentsWaiting'
import InfoModal from '../../components/subjectPage/Modal/InfoModal'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation'

export default function subject()
{
    const API_URL = "https://lule-api.adriano.sh";

    const router = useRouter()

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [courseInfo, setCourseInfo] = useState(null);

    const params = useParams();

    const handleOnClose = () => {setShowInfoModal(false)};

    useEffect(() => {
        fetch(`${API_URL}/courses/${params.subjectId}`)
        .then(response => response.json())
        .then(response => setCourseInfo(response))
    }, [])

    const handleHomeButton = (e) => {
        e.preventDefault();

        router.push("/");
    }

    return !courseInfo || (
        <>
        <div>
        <div className="bg-cover bg-center w-full h-40" style={{backgroundImage: `url('${courseInfo?.banner_url}')`}}>
            <div className="rounded-full bg-[#D9D9D9] py-2 px-10" style={{position:'absolute', top:'16%', left:'8%'}}>
                <p>{courseInfo?.name}</p>
            </div>
            <button className="rounded-full bg-[#D9D9D9] p-2 w-fit" style={{position:'absolute', top:'16%', right:'8%'}} 
            onClick={() => {setShowInfoModal(true)}}>
                <Image
                    src="/info-icon.svg"
                    width={20}
                    height={20}
                    alt='info'
                />
            </button>
        </div>
            <div className='flex flex-row justify-between'>
                <DocumentGroup document_groups={courseInfo.document_groups} courseId={courseInfo.id}/>
                <DocumentsWaiting/>
            </div>
        </div>
        <div style={{position: 'absolute', bottom:'2%', left:'1%'}}>
            <button className='flex flex-row p-3 bg-[#D9D9D9] rounded-full drop-shadow-lg' onClick={handleHomeButton}>
                <Image
                    src="/back-icon.svg"
                    width={20}
                    height={20}
                    alt='back-icon'
                />
                <p className='ml-2 hover:font-bold'>Home</p>
            </button>
        </div>
        <InfoModal onClose={handleOnClose} visible={showInfoModal}/>
        </>
    );
}