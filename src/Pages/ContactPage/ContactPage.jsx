import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [messageStatus, setMessageStatus] = useState("");

    const handleSendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);


        emailjs.sendForm(
            'service_iiw6zp3',
            'template_te5lb1g',
            form.current,
            'fVwA936n0LmAQGmlM'
        )
            .then((result) => {
                console.log(result.text);
                setMessageStatus("success");
                setIsSending(false);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setMessageStatus("error");
                setIsSending(false);
            });
    };

    return (
        <div className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[120px] pb-20 px-4'>
            <div className='max-w-[600px] mx-auto bg-[#112240] p-8 rounded-lg shadow-2xl border border-gray-800'>

                <div className='mb-20'>
                    <h2 className='text-5xl font-bold text-white border-b-4 border-pink-600 inline-block mb-4'>
                        Contact Me
                    </h2>
                    <p className='text-xl  text-gray-400'>
                        // Feel free to reach out to me for collaborations, opportunities, or just to say hi!
                    </p>
                </div>

                <form ref={form} onSubmit={handleSendEmail} className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <label className='mb-1 text-sm text-pink-600 font-semibold uppercase'>Name</label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            className='bg-[#0a192f] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-pink-600 transition-colors'
                            required
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='mb-1 text-sm text-pink-600 font-semibold uppercase'>Email</label>
                        <input
                            type="email"
                            name="reply_to"
                            placeholder="Your Email"
                            className='bg-[#0a192f] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-pink-600 transition-colors'
                            required
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='mb-1 text-sm text-pink-600 font-semibold uppercase'>Message</label>
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Write your message here..."
                            className='bg-[#0a192f] border border-gray-700 p-3 rounded text-white focus:outline-none focus:border-pink-600 transition-colors'
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className='bg-pink-600 hover:bg-transparent border-2 border-pink-600 text-white font-bold py-3 px-6 rounded transition-all duration-300 mt-4 disabled:opacity-50'
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>


                    {messageStatus === "success" && (
                        <p className='text-green-500 font-medium text-center mt-2'>
                            Thanks! Your message has been sent successfully.
                        </p>
                    )}
                    {messageStatus === "error" && (
                        <p className='text-red-500 font-medium text-center mt-2'>
                            Oops! Something went wrong. Please try again later.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactPage;