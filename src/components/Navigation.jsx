import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from 'react-icons/ci';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const isCartEmpty = true;

    return (
        <nav className="bg-white shadow-sm relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
                <a href='/' className="flex items-center">
                    <img className="w-32 h-auto z-10" src="/src/assets/logo.png" alt="Logo" />
                </a>
                <div className="hidden sm:block sm:ml-6">
                    <div className="ev-nav flex space-x-9 items-center">
                        <a href="#" className="p-2 text-sm font-medium">WOMEN</a>
                        <a href="#" className="p-2 text-sm font-medium">MEN</a>
                    </div>
                </div>
                <div className='flex space-x-4'>

                    <div className="flex items-center space-x-4 text-2xl">
                        {/* <CiSearch className='cursor-pointer' /> */}
                        <a href='/wishlist' ><CiHeart className='cursor-pointer' /></a>
                        <a href='/login' ><CiUser className='cursor-pointer' /></a>
                        <CiShoppingCart className='cursor-pointer' onClick={() => setIsCartOpen(!isCartOpen)} />
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

            <Transition
                show={isCartOpen}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setIsCartOpen(false)}
                >
                    <Dialog.Overlay className="fixed inset-0 bg-zinc-700 opacity-70" />

                    <div className="flex flex-col gap-5  absolute p-4 h-full right-0 w-[400px]  shadow-xl bg-white ">
                        <div className="flex bg-purple-100 p-2 justify-between items-center">
                            <h2 className="text-xl w-full text-center font-semibold text-gray-800">Shopping Bag</h2>
                            <FaTimes className="cursor-pointer hover:text-gray-600" onClick={() => setIsCartOpen(false)} />
                        </div>

                        <div className="px-6 py-4 ">
                            {isCartEmpty ? (
                                <>
                                <img src='../src/assets/cart-empty.png'></img>
                                <p className="text-gray-500 text-center">Your cart is currently empty.</p>
                                </>
                            ) : (
                                <div className="grid grid-cols-1 gap-4">
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="w-full mt-auto px-6 py-3 rounded-md text-center text-white bg-gray-800 hover:bg-gray-900 transition duration-300 ease-in-out"
                        >
                            {isCartEmpty ? "Go to Shop" : "Checkout"}
                        </button>
                    </div>
                </Dialog>
            </Transition>


        </nav>
    );
}

export default Navigation;
