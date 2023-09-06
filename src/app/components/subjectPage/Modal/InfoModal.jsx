import React from 'react'
import CloseButton from '../../../components/generic/buttons/CloseButton'

const InfoModal = ({visible, onClose}) => {

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
                    <p className='text-xl m-2'>{Description[0].name}</p>
                    <p className='text-lg m-2'>Semestar: {Description[0].semester}</p>
                    <p className='text-lg mt-2 ml-2'>Lekcije:</p>
                    <ul style={{marginTop:'1%', marginBottom:'8%'}}>
                        {Description[0].units.map((unit) => {
                           return <li className='text-sm p-2'>-- {unit}</li>
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