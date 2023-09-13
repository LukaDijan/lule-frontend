'use client'

import { useState } from "react";

const AddFileModal = ({isVisible, onClose, subjectId}) => {

    const API_URL = "https://lule-api.adriano.sh"

    if (!isVisible) return null;

    const [file, setFile] = useState(null);
    const [base64, setBase64] = useState(null);
    const [fileName, setFilename] = useState(null);
    const [documentGroup, setDocumentGroup] = useState(null);

    const handleOnClose = (e) => {
        if (e.target.id == 'addFileModalContainer') onClose();
    }

    const handleFileUpload = async (e) => {
        e.preventDefault();

        if (!file) {
            return;
        }

        const base64 = await toBase64(file);
        setBase64(base64);

        const data = {
            "name": fileName,
            "filename": fileName,
            "group_name": documentGroup,
            "content": base64,
        }

        await fetch(`${API_URL}/courses/${subjectId}/documents`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('File uploaded successfully:', data);
          })
          .catch(error => {
            console.error('There was a problem with the file upload:', error);
          });
    }

    const onFileChange = (e) => {
        if (!e.target.files) {
            return;
        }

        setFile(e.target.files[0]);
    }

    const onDocumentTypeChange = (e) => {
        setDocumentGroup(e.target.value);
    }

    const onFilenameChange = (e) => {
        setFilename(e.target.value);
    }

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
        
            fileReader.readAsDataURL(file);
        
            fileReader.onload = () => {
              resolve(fileReader.result);
            };
        
            fileReader.onerror = (error) => {
              reject(error);
            };
          });
    }

    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={handleOnClose} id="addFileModalContainer">
            <div className="bg-white p-6 rounded-lg drop-shadow-sm flex flex-col" style={{width:'30%', height:'50%'}}>
                <form method="POST" encType="multipart/form-data">
                <input
                    type="file"
                    onChange={onFileChange}
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-full
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-[#0ea5e9] file:text-white
                    hover:file:bg-[#0369a1] cursor-pointer"
                    style={{marginLeft:'30%', marginBottom:'10%'}}
                            />
                <input type="text" className="rounded-full w-full cursor-pointer bg-gray-50 border-gray-300 border p-2" onChange={onFilenameChange} placeholder="Filename"/>

                <select id="scriptType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" onChange={onDocumentTypeChange} style={{marginTop:'8%', width:'50%', marginLeft:'20%'}}>
                    <option selected>Vrsta</option>
                    <option value="Predavanja">Predavanja</option>
                    <option value="Auditorne">Auditorne</option>
                    <option value="Ispiti">Ispiti</option>
                    <option value="Zadaci">Zadaci</option>
                </select>

                </form>
                <div className="flex flex-row justify-around" style={{marginTop:'15%'}}>
                    <button onClick={handleFileUpload} className='bg-[#22c55e] text-white rounded-lg drop-shadow-md' style={{width:'120px', height:'50px'}}>Dodaj</button>
                    <button onClick={onClose} className='bg-[#dc2626] text-white rounded-lg drop-shadow-md' style={{width:'120px', height:'50px'}}>Zatvori</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default AddFileModal;