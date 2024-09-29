import React from 'react';
import '../../src/App.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600">
              <img src="/logo.png" alt="Company Logo" className='footerimg' />
            </div>

            <p className="mt-4 max-w-xs text-gray-500">
              Discover delicious recipes from around the world. Our mission is to bring diverse culinary experiences to your kitchen.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="size-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="size-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="size-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="size-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>
                  <FaDribbble className="size-6" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Recipe Suggestions</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Cooking Tips</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Nutrition Advice</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Meal Plans</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Contact Us</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="mailto:info@recipecompany.com" className="text-gray-700 transition hover:opacity-75">spicecanvas@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-gray-700 transition hover:opacity-75">+91 1234567891</a>
                </li>
                <li>
                  <p className="text-gray-700">123 Culinary Lane, Food City, FC 12345</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Follow Us</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Newsletter</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">YouTube Channel</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">Community Forum</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">© 2024 Spice Canvas Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
