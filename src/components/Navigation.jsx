import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from 'react-icons/ci';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
                <div className="flex items-center">
                    <img className="w-32 h-auto z-10" src="/src/assets/logo.png" alt="Logo" />
                </div>
                <div className="hidden sm:block sm:ml-6">
                    <div className="ev-nav flex space-x-9 items-center">
                        <a href="#" className="p-2 text-sm font-medium">WOMEN</a>
                        <a href="#" className="p-2 text-sm font-medium">MEN</a>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <div className="flex items-center space-x-4 text-2xl">
                        <CiSearch className='cursor-pointer' />
                        <CiHeart className='cursor-pointer' />
                        <CiUser className='cursor-pointer' />
                        <CiShoppingCart className='cursor-pointer' />
                    </div>
                    <div className="sm:hidden flex items-center">
                        {isOpen ? (
                            <FaTimes className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
                        ) : (
                            <FaBars className="text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
                        )}
                    </div>
                </div>
            </div>
            <Transition
                enter="transition-all duration-100 ease-in-out"
                enterFrom="h-0 opacity-0"
                enterTo="h-full opacity-100"
                leave="transition-all duration-100 ease-in-out"
                leaveFrom="h-full opacity-100"
                leaveTo="h-0 opacity-0"
                appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsOpen(false)}>
                    <div className="flex flex-col text-center justify-center items-center ev-nav sm:hidden bg-white border shadow-md py-2 absolute top-16 left-0 w-full z-20">
                        <Dialog.Overlay className="fixed inset-0 " />
                        <a href="#" className="p-2 text-sm font-medium  outline-none">WOMEN</a>
                        <a href="#" className="p-2 text-sm font-medium ">MEN</a>
                    </div>
                </Dialog>
            </Transition>
        </nav>
    );
}

export default Navigation;