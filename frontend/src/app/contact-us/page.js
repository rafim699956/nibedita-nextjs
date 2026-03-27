import React from 'react'
import Pagination from '../components/Pagination'
import SectionTitle from '../components/SectionTitle'
import AnimateSectionTitle from '../components/AnimateSectionTitle'
import ContactUs from '../components/ContactUs'
import Faq from '../components/Faq'

const ContactUsPage = () => {
    return (
        <>
            <section className="pt-10 pb-20 bg-linear-to-b from-[#EDDEF0] from-[66.66%] to-[#FFFFFF] to-[100.88%]">
                <div className='container space-y-10 md:space-y-15 lg:space-y-20'>
                    <Pagination />
                    <SectionTitle title='Connect and talk to us!' description="Feel free to contact us for your queries. We are always open for any kind of discussion and meet your needs within our boundaries." />
                    <AnimateSectionTitle />
                </div>
            </section>
            <ContactUs />
            <Faq />
        </>
    )
}

export default ContactUsPage