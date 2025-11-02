import { projectDetails } from '@/lib/constant';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import React from 'react'




async function page({ params },) {
    const id = params.id;

    const { heading, description, image, githubLink, liveLink } = projectDetails[Number(id)];

    return (
        <div className='min-h-[86vh]  '>

            <article className="flex flex-col p-6 w-full items-center justify-center  bg-slate-800">
                <h1 className='text-3xl font-medium  p-2 text-slate-300 '> {heading}</h1>
                <div className='relative h-[30rem] m-2 p-2 w-[90%] flex items-center justify-center '>
                    <Image
                        src={image}
                        alt="Example"
                        fill
                        className=" rounded-lg object-contain p-2 m-2 shadow-2xl "
                    />
                </div>

                <div className='p-2 m-2 border-1 shadow-2xl '>
                    {HTMLReactParser(description)}
                    

                </div>

            </article>


        </div>



    )
}

export default page