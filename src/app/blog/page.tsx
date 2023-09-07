'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function blog()
{

    const router = useRouter()

    const Posts = [
        {
            author: 'Ivo Ivic',
            title: 'Ispit iz Matematike',
            date: '07-08-2023',
            content: 'Ispit iz matematike bio je uzasno tezak. Svi ce pasti'
        },
        {
            author: 'Josip Josipovic',
            title: 'Usmeni iz fizike',
            date: '22-08-2023',
            content: 'Ispit iz matematike bio je uzasno tezak. Svi ce pasti'
        },
        {
            author: 'Josip Josipovic',
            title: 'Usmeni iz fizike',
            date: '22-08-2023',
            content: 'Ispit iz matematike bio je uzasno tezak. Svi ce pasti'
        }
    ];

    const handleOnClick = () => {
        router.push("/home");
    }

    return (
        <>
            <div className="flex justify-center items-center h-fit" style={{backgroundImage: "url('/books.jpg')", minHeight: "100vh"}}>
                <div className="bg-white p-6 rounded-lg drop-shadow-sm flex flex-col shadow h-fit" style={{width:'70%'}}>
                    <div className='flex flex-row justify-between'>
                    <p className='text-3xl font-bold'>Objave</p>
                    <Image
                        src="/back-icon.svg"
                        width={30}
                        height={30}
                        alt='back-icon'
                        className='cursor-pointer'
                        onClick={handleOnClick}
                    />
                    </div>
                    <ul>
                    {Posts.map((post) => {
                        return (
                            <li style={{padding: '5px', marginTop:'5%', marginBottom:'5%'}}>
                                <div className="flex flex-col bg-white w-fit h-fit rounded-lg p-4 border-solid border-2 border-[#D9D9D9] shadow" style={{marginLeft:'28%'}}>
                                    <p className="font-bold text-3xl" style={{marginBottom:'10%'}}>{post.title}</p>
                                    <p className="text-xl">{post.content}</p>
                                    <div className="flex flex-row justify-between" style={{marginTop:'10%'}}>
                                        <div>
                                            <Image
                                                src="/user-icon.svg"
                                                width={30}
                                                height={30}
                                                alt='userIcon'
                                            />
                                            <p className='text-md'>{post.author}</p>
                                        </div>
                                        <div>
                                            <Image
                                                src="/calendar-icon.svg"
                                                width={30}
                                                height={30}
                                                alt='CalendarIcon'
                                            />
                                            <p className='text-md'>{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                    </ul>
                </div>
            </div>
        </>
    );
}