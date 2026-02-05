import Link from 'next/link';
import React from 'react'
import { FaSquareXTwitter, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import Form from './Form';

const ContactUs = () => {
    const ContactUs = {
        sectionTitle: "Contact us",
        sectionDes:
            "Feel free to reach out with any questions about our services. You can contact us via email, phone, or visit us directly.",
        formContactUs: [],
        address: "Office address full goes here, dhaka, banglade",
        contactNum: +8801717324664,
        ourEmail: "uremail@email.com",
    };
    return (
        <section className="bg-primary-600">
      <div className="lg:max-w-291! container space-y-6 md:space-y-10 lg:space-y-14">
        <div className="max-w-195.5 mx-auto text-center space-y-4">
          <h2 className="text-white">{ContactUs.sectionTitle}</h2>
          <p className="text-white text-xl leading-8">{ContactUs.sectionDes}</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full lg:justify-between">
            <Form/>
            <div className="bg-white py-8 px-4 lg:py-10 lg:px-6 rounded-xl border border-[#E0C3E4] w-full lg:flex-1 lg:max-w-113.5 divide-y divider-[#E5E5E5] space-y-5">
              <div className="px-4 pb-5 space-y-4">
                <FaYoutube className="text-2xl text-primary-600" />
                <div className="space-y-1">
                  <h6>Our Address</h6>
                  <address>{ContactUs.address}</address>
                </div>
              </div>
              <div className="px-4 pb-5 space-y-4">
                <FaYoutube className="text-2xl text-primary-600" />
                <div className="space-y-1">
                  <h6>Contact Number</h6>
                  <Link href={`tel:${ContactUs.contactNum}`}>{ContactUs.contactNum}</Link>
                </div>
              </div>
              <div className="px-4 pb-5 space-y-4">
                <FaYoutube className="text-2xl text-primary-600" />
                <div className="space-y-1">
                  <h6>Our Email</h6>
                  <Link href={`tel:${ContactUs.contactNum}`}>{ContactUs.ourEmail}</Link>
                </div>
              </div>
              <div className="px-4 pb-5 space-y-4">
                <FaYoutube className="text-2xl text-primary-600" />
                <div className="space-y-1">
                  <h6>Social Media</h6>
                  <div className="flex items-center gap-3">
                    <Link
                      className="border border-border p-[0.563rem] flex items-center justify-center transition-all duration-300 ease-linear transform hover:-translate-y-1"
                      href="/"
                    >
                      <FaYoutube />
                    </Link>
                    <Link
                      className="border border-border p-[0.563rem] flex items-center justify-center transition-all duration-300 ease-linear transform hover:-translate-y-1"
                      href="/"
                    >
                      <FaYoutube />
                    </Link>
                    <Link
                      className="border border-border p-[0.563rem] flex items-center justify-center transition-all duration-300 ease-linear transform hover:-translate-y-1"
                      href="/"
                    >
                      <FaYoutube />
                    </Link>
                    <Link
                      className="border border-border p-[0.563rem] flex items-center justify-center transition-all duration-300 ease-linear transform hover:-translate-y-1"
                      href="/"
                    >
                      <FaXTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5802250977913!2d90.43197577589736!3d23.76234418831673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b80a76b70127%3A0x1551dab4feda6614!2sConcerned%20Women%20For%20Family%20Development%20(CWFD)!5e0!3m2!1sen!2sbd!4v1766406899203!5m2!1sen!2sbd"
              width="100%"
              height="460"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    )
}

export default ContactUs