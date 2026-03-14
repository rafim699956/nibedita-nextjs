import Image from "next/image";
import nibedita from "../../../public/nibedita.png";
import aboutImage from "../../../public/aboutnibedita.png"
import Pagination from "./Pagination";

const AboutNibedita = () => {
  return (
    <section>
      <div className="pt-10 pb-52 bg-linear-to-b from-[#EDDEF0] from-[66.66%] to-[#FFFFFF] to-[100.88%]">
        <div className="container space-y-6 md:space-y-10 lg:space-y-15">
          <Pagination />
          <div>
            <div className="max-w-[58.188rem] mx-auto">
              <h1 className="text-center">
                We take care of the communitys mental and physical health
              </h1>
            </div>
            <Image
              className="w-full max-w-full object-cover"
              width={`100%`}
              height={`100%`}
              src={nibedita}
              alt="nibedita"
            />
          </div>
        </div>
      </div>
      <div className="container -mt-59">
        <Image
              className="w-full max-w-full object-cover"
              width={`100%`}
              height={`100%`}
              src={aboutImage}
              alt="about nibedita"
            />
      </div>
    </section>
  );
};

export default AboutNibedita;
