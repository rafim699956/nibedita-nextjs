import Image from 'next/image'
import React from 'react'
import newsImage from "../../../public/newsandevent.png";
import Link from 'next/link';

const NewsSection = () => {
    return (
        <section className='pt-0'>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 md:gap-y-10 lg:gap-y-18'>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image src={newsImage} alt='news' width={403} height={248} />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm leading-5 text-[#737373]">July 31, 2025</p>
                        <h5><Link className='h5' href="#">Lorem ipsum dolor sit amet consectetur massa rhoncus enim semper tortor</Link></h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsSection