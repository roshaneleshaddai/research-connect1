import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] text-black py-4">
        {/* Contact Information Section */}
        
          {/* Address Section */}
          <div className="flex-col justify-around">

            {/* Social Media Links Section */}
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/research_conclave?igsh=djZhMmsydThidGZj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:text-gray-400" />
                </a>
                <a
                  href="https://linkedin.com/company/vrsec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl hover:text-gray-400" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=principal@vrsiddhartha.ac.in&bcc=principal@vrsiddhartha.ac.in">
                  <FaEnvelope className="text-2xl hover:text-gray-400" />
                </a>
                <a href="tel:+91 866 2582672">
                  <FaPhoneAlt className="text-2xl hover:text-gray-400" />
                </a>
                <a
                  href="https://www.facebook.com/vrsec/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl hover:text-gray-400" />
                </a>
              </div>
            </div>
          </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 border-t border-gray-600 pt-2">
          <p className="text-center">
            © {new Date().getFullYear()} Research Connect Organization. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;