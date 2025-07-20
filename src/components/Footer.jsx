import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6">
              <a
                href="https://github.com/Priti-Rathi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={24} className="hover:text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/priti-rathi-9090a4258/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} className="hover:text-blue-700" />
              </a>
              <a
                href="https://www.instagram.com/" // optional: update or remove
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} className="hover:text-pink-500" />
              </a>
            </div>

            <div className="mt-8 border-t border-gray-400 pt-6">
              <p className="text-sm">
                &copy; 2024 Priti Rathi. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Built with React & Tailwind ·
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
