import React, { useRef } from 'react';

export default function Styles() {
    

    const styles = [
        {
            "name": "Y2K",
            "image": "https://cdn.shopify.com/s/files/1/0600/4493/5332/files/hm_col_y2k_1213.webp?v=1702379704"
        },
        {
            "name": "Acubi",
            "image": "https://cdn.shopify.com/s/files/1/0600/4493/5332/files/hm_col_acubi_1213.webp?v=1702379705"
        },
        {
            "name": "Coquette",
            "image": "https://cdn.shopify.com/s/files/1/0600/4493/5332/files/hm_coquette_0103.webp?v=1704260394"
        },
        {
            "name": "Grunge",
            "image": "https://lewkin.com/cdn/shop/files/008_2_a3488f63-058c-4447-9ace-135474e6e255_1001x1360.jpg?v=1704848176"
        }
    ];

    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }

    return (
        <div className='px-10 flex flex-col py-10 gap-10 relative'>
            <h2 className='text-center font-bold text-2xl md:text-4xl tracking-widest'>CHOOSE YOUR STYLE</h2>
            <div className="ev-carousel-style rounded-lg flex overflow-auto  no-scrollbar gap-10" ref={carouselRef}>
                {styles.map((style, index) => (
                    <div key={index} className='min-w-max flex flex-col gap-3 relative'>
                        <div className='rounded-lg overflow-hidden '>
                            <img
                                className="w-80 h-[430px] object-cover shadow-lg transform hover:scale-105 transition duration-1000 ease-in-out"
                                src={style.image}
                                alt={`aesthetic ${index}`}
                            />
                        </div>
                        <div className="text-center">{style.name}</div>
                    </div>
                ))}
            </div>
            <button onClick={scrollLeft} className="md:hidden shadow absolute left-10 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-40 text-gray-800 font-bold py-2 px-2  backdrop-filter backdrop-blur">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 00-1.414 0L7 9.586l4.293 4.293a1 1 0 001.414-1.414L9.414 10l3.293-3.293a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
            </button>
            <button onClick={scrollRight} className="md:hidden shadow-xl absolute right-10 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-30 hover:bg-opacity-40 text-gray-800 font-bold py-2 px-2 backdrop-filter backdrop-blur">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 001.414 0L12 10.414l-3.293-3.293a1 1 0 00-1.414 1.414L9.586 10l-2.293 2.293a1 1 0 000 1.414z" clipRule="evenodd" /></svg>
            </button>
        </div>
    )
}