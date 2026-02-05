
import TabBtn from "./TabBtn";

const WhoWeAre = ({clildren}) => {
   
    return (
        <section className="bg-white">
            <div className="container space-y-6 md:space-y-8 lg:space-y-14">
                <div className="space-y-4 max-w-[58.188rem]">
                    <h2>Who we are</h2>
                    <p>CWFD Nibedita is an initiative to empower communities through all-in-all services that includes physical and mental health. Founded in 1975, we have a legacy of care and commitment. Our  focus is on physical, mental, and the well-being of mother and child.</p>
                </div>
                
                {clildren}
            </div>
        </section>
    )
}

export default WhoWeAre