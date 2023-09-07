import Navbar from "../components/Navbar/Navbar";
import DocumentCard from '../components/cards/documentCard'

export default function SearchResults()
{
    const isLoggedIn = false;

    const Documents = [
        {imageSrc: '/pdf-image.svg', name: 'Materijali 1'},
        {imageSrc: '/pdf-image.svg', name: 'Materijali 2'},
        {imageSrc: '/word-image.svg', name: 'Materijali 3'}
    ];

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn}/>
            <div className='flex flex-col flex-wrap' style={{marginLeft:'40px', marginTop:'20px'}}>
            <p className='text-4xl font-bold text-black'>Rezultati pretrazivanja</p>
                <div className="flex flex-row flex-wrap">
                    {Documents.map((document) => (
                    <DocumentCard imageSrc={document.imageSrc} name={document.name}/>
                ))}
                </div>
        </div>

        </>
    );
}