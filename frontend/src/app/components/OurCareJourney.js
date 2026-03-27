import React from 'react'
import galimg1 from "../../../public/sliderimg1.png";
import galimg2 from "../../../public/sliderimg2.png";
import galimg3 from "../../../public/sliderimg3.png";
import galimg4 from "../../../public/sliderimg4.png";
import galimg5 from "../../../public/sliderimg5.png";
import galimg6 from "../../../public/sliderimg6.png";
import galimg7 from "../../../public/sliderimg7.png";
import galimg8 from "../../../public/sliderimg8.png";
import galimg9 from "../../../public/sliderimg9.png";
import galimg10 from "../../../public/sliderimg10.png";
import Image from 'next/image';
import Link from 'next/link';

const OurCareJourney = () => {
  const OurCareJourney = {
    sectionTitle: "Our care journey",
    sliderImgs: [
      {
        id: 1,
        img: galimg1,
      },
      {
        id: 2,
        img: galimg2,
      },
      {
        id: 3,
        img: galimg3,
      },
      {
        id: 4,
        img: galimg4,
      },
      {
        id: 5,
        img: galimg5,
      },
      {
        id: 6,
        img: galimg6,
      },
      {
        id: 7,
        img: galimg7,
      },
      {
        id: 8,
        img: galimg8,
      },
      {
        id: 9,
        img: galimg9,
      },
      {
        id: 10,
        img: galimg10,
      },
    ],
  };
  return (
    <section className='space-y-8 md:space-y-10 lg:space-y-14'>
      <div className='container'>
        <h2 className='text-center'>Our care journey</h2>
      </div>
      <div className="space-y-6 relative">
        <div className='absolute left-0 right-0 -bottom-6 h-74.25 z-99 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_-3.45%,_#FFFFFF_100%)] pointer-events-none flex items-end justify-center px-3'>
          <Link href="/gallery" className='text-primary-600 pointer-events-auto'>See our Full Gallary</Link>
        </div>
        <div className="overflow-hidden">
          <div className="animate-marquee flex gap-6">
            {OurCareJourney.sliderImgs.map((item) => (
              <div key={item.id} className="shrink-0">
                <Image
                  src={item.img}
                  alt={`Gallery Image ${item.id}`}
                  width={364}
                  height={267}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="animate-marquee animate-marquee-reverse flex gap-6">
            {OurCareJourney.sliderImgs.map((item) => (
              <div key={item.id} className="shrink-0">
                <Image
                  src={item.img}
                  alt={`Gallery Image ${item.id}`}
                  width={364}
                  height={267}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCareJourney