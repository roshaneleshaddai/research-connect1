import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contact = () => {
  const contact1 = [
    {
      id: 1,
      name: "Dr. G. Kalyani",
      ph: 8465930550,
    },
    {
      id: 2,
      name: "Dr. Y. Sandeep",
      ph: 9491757787,
    },
    {
      id: 3,
      name: "Dr. Jaya Prakash S",
      ph: 9848143200,
    },
    {
      id: 4,
      name: "Dr. Gargi M",
      ph: 8886599444,
    },
  ];

  return (
    <>
      <div className="mt-16  bg-white text-black h-screen">
      <h1 className="text-2xl lg:text-5xl lg:pt-10 pt-20 lg:mb-0 mb-4 font-extrabold text-center bg-white text-black">
        Contact us
      </h1>
      {/* <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:mx-32 lg:mb-32 m-20 lg:mx-16 mx-10">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold pb-5 text-center flex items-center justify-center">
            <IoLocationOutline className="mr-3" />
            Our Location
          </h1>
          <p className="text-lg lg:text-2xl text-center">
            Velagapudi Ramakrishna Siddhartha Engineering College,
            <br />
            Chalasani Nagar, Kanuru,
            <br />
            Vijayawada, Andhra Pradesh 520007.
          </p>
        </div>
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold pb-5 text-center">
            Drop us a Line
          </h1>
          <div className="text-base lg:text-2xl">
            {contact1.map((c1) => (
              <li key={c1.id} className="flex items-center">
                <IoCallOutline className="mr-3" />
                {c1.name} - {c1.ph}
              </li>
            ))}
          </div>
        </div>
      </div> */}
      <div className="flex-col p-10 justify-around">
      
                  {/* Social Media Links Section */}
                  <div className="text-center">
                    <div className="flex flex-col items-center justify-center space-x-4">
                      <div className='flex p-5'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=principal@vrsiddhartha.ac.in&bcc=researchsubmission@gmail.com">
                        <FaEnvelope className="text-2xl hover:text-gray-400" />
                      </a>
                      <span className='px-5'>researchsubmission@gmail.com</span></div>
                      <div className='flex p-5'>
                        <a href="tel:+91 866 2582672">
                        <FaPhoneAlt className="text-2xl hover:text-gray-400" />
                      </a>
                      <span className='px-5'>+91 9876543210</span></div>
                    </div>
                  </div>
                </div>
      
      </div>
    </>
  );
};

export default contact;
