import Image from 'next/image';

export default function myProfile()
{

    const ProfileData = [
        {
            name: 'Ivo',
            surname: 'Ivic',
            email: 'ivo.ivic@gmail.com',
            course: 'Racunarstvo',
            semester: 'I'
        }
    ];

    return (
        <>
            <div>
                <div className="bg-cover bg-center w-full h-40 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-b-xl">
                    <div className="py-2 px-10 rounded-full" style={{position:'absolute', top:'10%', left:'8%'}}>
                        <Image
                            src="/profile-picture-2.jpg"
                            width={140}
                            height={140}
                            alt='profile picture'
                            className='rounded-full'
                        />
                    </div>
                </div>
                <div className='flex flex-row' style={{marginTop:'130px', marginLeft:'40%'}}>
                        <div className='flex flex-col p-4 bg-[#D9D9D9] shadow-lg rounded-lg justify-between' style={{width:'500px'}}>
                            <div className='bg-white rounded-lg text-center text-4xl m-5'>
                                <h3>{ProfileData[0].name}</h3>
                            </div>
                            <div className='bg-white rounded-lg text-center text-4xl m-5'>
                                <h3>{ProfileData[0].surname}</h3>
                            </div>
                            <div className='bg-white rounded-lg text-center text-4xl m-5'>
                                <h3>{ProfileData[0].email}</h3>
                            </div>
                            <div className='bg-white rounded-lg text-center text-4xl m-5'>
                                <h3>{ProfileData[0].course}</h3>
                            </div>
                            <div className='bg-white rounded-lg text-center text-4xl m-5'>
                                <h3>{ProfileData[0].semester    }</h3>
                            </div>
                            <button className='rounded-lg bg-[#0096FF] mt-10 text-white' style={{width:'35%', height:'50px', marginLeft:'60%'}}>
                                Edit
                            </button>
                        </div>
                    </div>
            </div>
        </>
    );
}