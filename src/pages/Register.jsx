import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Register() {
    return (
        <>
            <Navigation />
            <div className="flex flex-col my-10 items-center">
                <h1 className="text-3xl font-bold text-center mb-6">REGISTER</h1>

                <form className="flex flex-col space-y-5 md:w-1/3 w-3/4">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-sm font-medium mb-2">First Name</label>
                        <input type="text" id="username" placeholder="Enter your first name" className="appearance-none border border-gray-300 px-3 py-2 focus:outline-none" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-sm font-medium mb-2">Last Name</label>
                        <input type="text" id="username" placeholder="Enter your last name" className="appearance-none border border-gray-300 px-3 py-2 focus:outline-none" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" placeholder="Enter your email address" className="appearance-none border border-gray-300 px-3 py-2 focus:outline-none" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium mb-2">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" className="appearance-none border border-gray-300 px-3 py-2 focus:outline-none" />
                    </div>

            

                    <button
                        type="submit"
                        className="mx-auto w-1/2 py-2 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-sm">
                    Already have an account? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in here</a>
                </p>
            </div>
            <Footer />
        </>
    );
}
