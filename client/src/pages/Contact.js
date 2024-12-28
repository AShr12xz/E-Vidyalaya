import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkkejlg");
  const toastShown = useRef(false); // Track if toast has been shown

  useEffect(() => {
    if (state.succeeded && !toastShown.current) {
      toast.success("Message sent successfully");
      toast.clearWaitingQueue();
      toastShown.current = true; // Set toastShown to true after showing toast
      
      setTimeout(() => {
        const form = document.getElementById("form");
        form?.reset();
        toastShown.current = false; // Reset after form is cleared
      }, 500);
    }
  }, [state]);

  const location = "22.775017972049326, 86.16116152510077";

  return (
    <div className="max-w-6xl mt-10 mb-6 mx-auto bg-white p-6">
      <ToastContainer />
      <div className="grid md:grid-cols-2 gap-12 items-center relative overflow-hidden p-8 shadow-lg rounded-lg border border-gray-200">
        <div>
          <h2 className="text-gray-800 flex justify-center text-4xl font-bold" style={{ fontFamily: 'Merriweather' }}>Get In Touch</h2>
          <p className="text-md text-gray-600 mt-4 leading-relaxed">
            Have a specific inquiry? Our team is ready to engage with you.
          </p>

          <form onSubmit={handleSubmit} id='form'>
            <div className="space-y-6 mt-6">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="px-4 py-3 bg-gray-50 w-full text-gray-700 text-md border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Street"
                name="street"
                className="px-4 py-3 bg-gray-50 w-full text-gray-700 text-md border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name='city'
                  placeholder="City"
                  className="px-4 py-3 bg-gray-50 w-full text-gray-700 text-md border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />

                <input
                  type="text"
                  name='postcode'
                  placeholder="Postcode"
                  className="px-4 py-3 bg-gray-50 w-full text-gray-700 text-md border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <input
                type="number"
                name='phone'
                placeholder="Phone No."
                className="px-4 py-3 bg-gray-50 w-full text-gray-700 text-md border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="px-4 py-3 bg-gray-50 w-full text-gray-700 text-md border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                placeholder="Write Message"
                name='message'
                className="px-4 py-3 bg-gray-50 w-full text-gray-700 text-md border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-6 flex items-center justify-center text-md w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded shadow-md focus:ring-2 focus:ring-blue-300 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
        <div className="z-10 relative h-full max-md:min-h-[350px] rounded-lg overflow-hidden">
          <iframe
            title="Map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            className="left-0 top-0 h-full w-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
