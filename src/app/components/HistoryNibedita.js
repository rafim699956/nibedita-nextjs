import React from 'react'
import Timeline from './Timeline'

const HistoryNibedita = () => {
    const HistoryNibedita = {
        sectionTitle: "History of the Nibedita",
        sectionDes: "CWFD Nibedita is an initiative to empower communities through all-in-all services that includes physical and mental health. Founded in 1975, we have a legacy.",

    }
    return (
        <section className="bg-[#FBF7FC]">
            <div className="container space-y-6 md:space-y-10 lg:space-y-14">
                <div className="lg:max-w-195.5 mx-auto space-y-4">
                    <h2 className="text-center text-secondary-950">{HistoryNibedita.sectionTitle}</h2>
                    <p className="text-center lg:text-xl lg:leading-8 text-black">{HistoryNibedita.sectionDes}</p>
                </div>
                <Timeline />
            </div>
        </section>
    )
}

export default HistoryNibedita