import Image from 'next/image';
import DocumentGroup from '../../components/subjectPage/DocumentGroup'
import DocumentsWaiting from '../../components/subjectPage/DocumentsWaiting'

export default function subject()
{
    return (
        <>
        <div>
        <div className="bg-cover bg-center w-full h-40" style={{backgroundImage: "url('/math.jpg')"}}>
            <div className="rounded-full bg-[#D9D9D9] py-2 px-10" style={{position:'absolute', top:'16%', left:'8%'}}>
                <p>Matematika</p>
            </div>
            <div className="rounded-full bg-[#D9D9D9] p-2 w-fit" style={{position:'absolute', top:'16%', right:'8%'}}>
                <Image
                    src="/info-icon.svg"
                    width={20}
                    height={20}
                    alt='info'
                />
            </div>
        </div>
            <div className='flex flex-row justify-between'>
                <DocumentGroup/>
                <DocumentsWaiting/>
            </div>
        </div>
        </>
    );
}