import React from 'react'
import CloseButton from '../../../components/generic/buttons/CloseButton'

const InfoModal = ({visible, onClose, subjectName, lessons}) => {

    if (!visible) return null;

    const handleOnClose = (e) => {
        if (e.target.id === 'modalContainer') onClose();
    }

    const Description = [
        {
            name: 'Matematika I',
            semester: 'I',
            units: [
                'Uvod. Relacije. Funkcije. Skupovi brojeva, kompleksni brojevi, trigonometrijski oblik kompleksnog broja, Moivreove formule.',
                'Matrice. Osnovne operacije s matricama. Matrični zapis sustava linearnih jednadžbi. Gaussova eliminacija. Linearna nezavisnost i rang matrice. Kronecker-Capellijev teorem',
                'Inverzna matrica. Determinante. Podmatrice i poddeterminante. Laplaceov razvoj determinante. Cramerovo pravilo.'
            ]
        }
    ];



    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'
            onClick={handleOnClose} id='modalContainer'>
                <div className='bg-white p-6 rounded-lg drop-shadow-sm flex flex-col'>
                    <p className='text-xl m-2'>{subjectName}</p>
                    <p className='text-lg mt-2 ml-2'>Lekcije:</p>
                    <ul style={{marginTop:'1%', marginBottom:'8%'}}>
                        {lessons.map((lesson) => {
                           return <li className='text-sm p-2'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row'>
                                    <p className='text-lg mr-2 font-bold'>{lesson.number}</p>
                                    <p className='text-lg font-bold'>{lesson.name}</p>
                                </div>
                                <p className='text-md'>{lesson.description}</p>
                            </div>
                           </li>
                        })}
                    </ul>
                    <div className='flex flex-row justify-end'>
                    <CloseButton onClickHandler={onClose}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoModal;