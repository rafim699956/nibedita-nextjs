import React from 'react'
import Timeline from './Timeline'
import SectionTitle from './SectionTitle'

const HistoryNibedita = () => {
    const HistoryNibedita = {
        sectionTitle: "History of the Nibedita",
        sectionDes: "CWFD Nibedita is an initiative to empower communities through all-in-all services that includes physical and mental health. Founded in 1975, we have a legacy.",

    }
    return (
        <section className="bg-[#FBF7FC] overflow-hidden">
            <div className="container space-y-6 md:space-y-10 lg:space-y-14">
                <SectionTitle title={HistoryNibedita.sectionTitle} description={HistoryNibedita.sectionDes} />
                <Timeline />
            </div>
        </section>
    )
}

export default HistoryNibedita