'use client';

import Navbar from "../components/Navbar/Navbar";
import DocumentCard from '../components/cards/documentCard'
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const API_URL = "https://lule-api.adriano.sh"
const MAPPING = {
    "application/pdf": "/pdf-image.svg"
}

export default function SearchResults() {

    const router = useRouter()

    const searchParams = useSearchParams()
    const query = searchParams.get('query')

    const isLoggedIn = false;

    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/documents?query=${query}`)
            .then(response => response.json())
            .then(response => setSearchResults(response))
    }, [])

    const handleHomeButton = (e) => {
        e.preventDefault();

        router.push("/");
    }

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} />
            <div className='flex flex-col flex-wrap' style={{ marginLeft: '40px', marginTop: '20px' }}>
                <p className='text-4xl font-bold text-black'>Rezultati pretraživanja</p>
                {searchResults?.courses.map((course) => {
                let documents = []
                for (let document_group of course.document_groups) {
                    documents = [...documents, ...document_group.documents]
                }

                return (
                    <>
                        <p className='text-xl font-bold text-black' style={{marginTop: '20px'}}>{course.name}</p>
                        <div className="flex flex-row flex-wrap">
                            {documents.map((document) => (
                                <DocumentCard imageSrc={MAPPING[document.content_type]} name={document.name}
                                fileUrl={document.file_url} fileName={document.filename}/>
                            ))}
                        </div>
                    </>
                )})}
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
        </>
    );
}