"use client";
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
const Form = () => {
     const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addFromData({
        id: crypto.randomUUID(),
        name,
        email,
        subject,
        message,
      })
    );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
    return (
        <form
            className="bg-white p-6 pb-8 md:p-8 md:pb-9 lg:p-10 lg:pb-12 border border-[#E0C3E4] rounded-xl inline-flex flex-col gap-6 w-full lg:max-w-163.5 lg:flex-1"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="fName">Full Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Type your full name"
                        id="fName"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email">Email Address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Type your email address"
                        id="email"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="subject">Subject</label>
                <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    placeholder="Type your subject"
                    id="subject"
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="message">Your Message</label>
                <textarea
                    className="min-h-39.5 resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name=""
                    id="message"
                    placeholder="Type your message"
                ></textarea>
            </div>
            <div className="mt-4">
                <button
                    className="py-6 px-8 rounded-full bg-primary-600 text-white cursor-pointer flex items-center gap-2 text-lg leading-none font-semibold"
                    type="submit"
                >
                    Send Message <FaArrowRightLong className="text-2xl" />
                </button>
            </div>
        </form>
    )
}

export default Form