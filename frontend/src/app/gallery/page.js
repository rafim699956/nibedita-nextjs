import React from 'react'
import Pagination from '../components/Pagination';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import newsImage from "../../../public/newsandevent.png";
import AnimateSectionTitle from '../components/AnimateSectionTitle';


const page = () => {
    return (
        <>
            <section className="pt-10 pb-20 md:pb-30 lg:pb-52 bg-linear-to-b from-[#EDDEF0] from-[66.66%] to-[#FFFFFF] to-[100.88%]">
                <div className='container space-y-10 md:space-y-15 lg:space-y-20'>
                    <Pagination />
                    <SectionTitle title='Our Care Journey' description="Take a look at the photos from Nibedita's healthcare services. Each one of them is a testament to our dedicated effort in providing compassionate care." />
                    <AnimateSectionTitle />
                </div>
            </section>
            <section className='-mt-12 lg:-mt-20 pt-0'>
                <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6'>
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                    <Image src={newsImage} alt='gallary img' width={400} height={388} />
                </div>
            </section>

        </>
    )
}

export default page;