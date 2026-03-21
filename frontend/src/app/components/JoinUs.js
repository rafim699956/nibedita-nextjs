import Image from 'next/image'
import React from 'react'
import nibedita from "../../../public/nibedita.png"
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

const JoinUs = () => {
    return (
        <section className='bg-white'>
            <div className='container'>
                <div className='bg-[#EDDEF0] rounded-lg pt-10 md:pt-12 lg:pt-24 px-6 md:px-12 lg:px-17.5 space-y-5.5'>
                    <div className='flex lg:items-center flex-wrap justify-between gap-4'>
                        <div className='space-y-4 lg:max-w-158.5'>
                            <h2>Want to serve society? Join Us.</h2>
                            <p className='lg:text-lg lg:leading-7'>If you want to be part of a team that values the change of society for the greater good, we’d love to have you on board.</p>
                        </div>
                        <Link
                            className="py-4.5 px-9 bg-primary-600 rounded-full inline-flex items-center gap-2 text-white font-medium lg:text-lg lg:leading-7 shrink-0"
                            href="/see-all-openings"
                        >
                            See All Openings <FaArrowRightLong className="text-2xl" />
                        </Link>
                    </div>
                    <div className='lg:max-w-238 mx-auto'>
                        <Image className='w-full' src={nibedita} alt="Nibedita" width={952} height={162} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUs