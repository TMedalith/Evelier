import React, { useState } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Login() {
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleForgotPasswordClick = () => {
        setShowForgotPassword(true);
    };

    const handleCancelForgotPassword = () => {
        setShowForgotPassword(false);
    };

    return (
        <>
            <Navigation />
            <div className="flex flex-col  my-[108px] items-center">
                {!showForgotPassword ? (
                    <>
                        <h1 className="text-3xl font-bold text-center mb-6">LOGIN</h1>

                        <form className="flex flex-col space-y-5 md:w-1/3 w-3/4">
                            <div className="flex flex-col">
                                <label htmlFor="username" className="text-sm font-medium mb-2"> Username</label>
                                <input type="text" id="username" placeholder="your@gmail.com" className="appearance-none border border-gray-300 px-3 py-2 focus:outline-none" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-sm font-medium mb-2">Password</label>
                                <input type="password" id="password" placeholder="password" className="appearance-none border border-gray-300 px-3 py-2 focus:outline-none" />
                            </div>

                            <div className="flex items-center justify-between">
                                <a href="#recover" className="text-sm hover:font-semibold  underline" onClick={handleForgotPasswordClick}>
                                    Forgot your password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="mx-auto w-1/2 py-2 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                            <a href="/register" className="text-sm text-center hover:font-semibold underline">
                                Create an account
                            </a>
                        </form>
                    </>
                ) : (
                    <div id='recover' className=' space-y-4   pt-40 -translate-y-44 flex flex-col'>
                        <h1 className="text-3xl font-bold text-center mb-6">Forgot Password</h1>
                        <p>Enter your email to reset your password.</p>
                        <input type="email" id="email" placeholder="your@gmail.com" className="appearance-none w-full border border-gray-300 px-3 py-2 focus:outline-none" />
                       
                        <a href="#login" className="text-sm  text-center hover:font-semibold  underline" onClick={handleCancelForgotPassword}>
                            Cancel
                        </a>

                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
