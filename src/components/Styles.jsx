import React, { useRef } from 'react';

export default function Styles() {
    const imageStyles = [
        '/src/assets/aesthetic.png',
        '/src/assets/aesthetic.png',
        '/src/assets/aesthetic.png',
        '/src/assets/aesthetic.png'
    ];

    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }

    return (
        <div className='px-16 flex flex-col py-10 gap-10 relative'>
            <h2 className='text-center font-bold text-2xl md:text-4xl tracking-widest'>CHOOSE YOUR STYLE</h2>
            <div className="ev-carousel-style rounded-lg flex overflow-auto  no-scrollbar gap-10" ref={carouselRef}>
                {imageStyles.map((image, index) => (
                    <div key={index} className='min-w-max flex flex-col gap-3 relative'>
                        <div className='rounded-lg overflow-hidden'>
                            <img
                                className="w-80 shadow-lg transform hover:scale-105 transition duration-1000 ease-in-out"
                                src={image}
                                alt={`aesthetic ${index}`}
                            />
                        </div>
                        <div className="text-center">Style {index + 1}</div>
                    </div>
                ))}
            </div>
            <button onClick={scrollLeft} className="md:hidden shadow absolute left-11 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-800 font-bold py-2 px-2 rounded-full backdrop-filter backdrop-blur">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 00-1.414 0L7 9.586l4.293 4.293a1 1 0 001.414-1.414L9.414 10l3.293-3.293a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
            </button>
            <button onClick={scrollRight} className="md:hidden shadow-xl absolute right-11 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-800 font-bold py-2 px-2 rounded-full backdrop-filter backdrop-blur">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 001.414 0L12 10.414l-3.293-3.293a1 1 0 00-1.414 1.414L9.586 10l-2.293 2.293a1 1 0 000 1.414z" clipRule="evenodd" /></svg>
            </button>
        </div>
    )
}