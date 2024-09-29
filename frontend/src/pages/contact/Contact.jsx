import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-2xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        My educational path has been one of personal growth and discovery. Here are the specifics of my academic background.
                    </p>
                </div>
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                    <h1 className="text-2xl font-semibold">Let's Talk</h1>
                    <input type="hidden" name="access_key" value="09f4e859-83ff-4ecc-a253-f1c220af1f1e" />
                    <input
                        className="input-box block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        name="first_name"
                        type="text"
                        placeholder="Your Name"
                    />
                    <input
                        className="input-box block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        name="Email"
                        type="email"
                        placeholder="Your Email"
                    />
                    <input
                        className="input-box block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        name="Subject"
                        type="text"
                        placeholder="Subject"
                    />
                    <textarea
                        className="input-box message block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        name="Message"
                        placeholder="Message"
                    ></textarea>
                    <button
                        className="contact-me-btn w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition duration-200"
                        type="submit"
                    >
                        Send Notification
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
