import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const footerItems = [
        {
            title: 'Company',
            items: ['About Us', 'Term of Service', 'Term of Service']
        },
        {
            title: 'Help',
            items: ['FAQ', 'Contact Us']
        },
        {
            title: 'Shope',
            items: ['Y2k', 'Coquette', 'Acubi', 'Grunge']
        }
    ];

    return (
        <footer className=" bg-gray-900 text-white px-5 py-12">
            <div className="container mx-auto px-6">
                <div className="lg:flex justify-between items-start">
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-4 text-white">SUBSCRIBE NOW</h2>
                        <p className="mb-6 text-gray-400">Sign up to our newsletter for exclusive offers, new arrivals and more!</p>
                        <div className="flex">
                            <input className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none" type="text" placeholder="Enter your email" />
                            <button className="bg-white border border-white text-black px-4 py-2 rounded-r-md focus:outline-none flex items-center">
                                <svg className="w-4 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="mt-6   lg:mt-0 lg:w-2/3 lg:flex justify-between">
                        {footerItems.map((item, index) => (
                            <div key={index} className="flex flex-col md:text-left lg:ml-12">
                                <h2 className="text-lg font-semibold mb-4 cursor-pointer md:cursor-none " onClick={() => setExpandedItem(expandedItem === index ? null : index)}>{item.title}</h2>
                                <div className={`md:flex ${expandedItem === index ? 'block' : 'hidden'}`}>
                                    <ul className="mb-4">
                                        {item.items.map((subItem, subIndex) => (
                                            <li key={subIndex} className="mb-2"><a href="#" className="text-gray-400 hover:text-white">{subItem}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex justify-center items-center">
                    <a href="#" className="text-2xl mr-4 text-gray-400 hover:text-white"><FaFacebookSquare /></a>
                    <a href="#" className="text-2xl mr-4 text-gray-400 hover:text-white"><FaInstagram /></a>
                    <a href="#" className="text-2xl mr-4 text-gray-400 hover:text-white"><FaTwitter /></a>
                    <a href="#" className="text-2xl text-gray-400 hover:text-white"><FaYoutube /></a>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    <p className="mb-2"> Lima, Peru</p>
                    <p className="mb-2">avelier@avelier.com</p>
                    <p className="mb-2">+51 926412693</p>
                </div>
            </div>
            
            <hr className="my-8 border-gray-700" />
            <div className="text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Evelier. All the rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;