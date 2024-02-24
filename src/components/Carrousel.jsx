import React, { useRef } from 'react';
import ProductCard from './ProductCard';

function Carrousel({ products, title }) {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }

    return (
        <div className='px-10 space-y-7 mb-5 md:mb-20 relative'>
            <h2 className='text-2xl md:text-4xl font-bold tracking-wider'>{title}</h2>
            <div className="relative overflow-hidden">
                <div ref={carouselRef} className='flex space-x-6 overflow-x-auto scrollbar '>
                    {products.map((product, index) => (
                        <div className='mb-3 md:mb-12' >
                            <ProductCard key={index} product={product} index={index} />
                        </div>

                    ))}
                </div>
            </div>
            <button onClick={scrollLeft} className=" shadow absolute left-10  top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-20 hover:bg-opacity-30 text-gray-800 font-bold p-1  backdrop-filter backdrop-blur">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 00-1.414 0L7 9.586l4.293 4.293a1 1 0 001.414-1.414L9.414 10l3.293-3.293a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
            </button>
            <button onClick={scrollRight} className=" shadow-xl absolute right-10 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-20 hover:bg-opacity-30 text-gray-800 font-bold p-1 backdrop-filter backdrop-blur">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 001.414 0L12 10.414l-3.293-3.293a1 1 0 00-1.414 1.414L9.586 10l-2.293 2.293a1 1 0 000 1.414z" clipRule="evenodd" /></svg>
            </button>
        </div>
    );
}

export default Carrousel;
