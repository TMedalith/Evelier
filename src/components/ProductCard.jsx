import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { FaTimes, FaCcPaypal, FaCheck } from 'react-icons/fa';

function ProductCard({ product, index }) {
  const { images, name, description, sizes, price, colors } = product;
  const [showQuickview, setShowQuickview] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    console.log('Producto agregado al carrito:', product);
  };

  const buyWithPayPal = () => {
    console.log('Comprando con PayPal:', product);
  };

  return (
    <>
      <div key={index} className='min-w-max flex flex-col'>
        <a className="group border relative cursor-pointer mb-2">
          <img
            className="w-36 h-48 md:w-72 md:h-96 object-cover md:80 "
            src={images[0]}
            alt={`producto ${index}`}
          />
          <img
            className="w-36 h-48 md:w-72 md:h-96 md:80 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            src={images[1]}
            alt={`producto ${index}`}
          />
          <button onClick={() => setShowQuickview(true)} className="absolute md:py-3 md:text-sm text-xs font-archivoNarrow py-1.5 bottom-0 w-full bg-black bg-opacity-70 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            QUICKVIEW
          </button>
        </a>
        <a className="text-center font-archivoNarrow uppercase cursor-pointer font text-sm md:text-lg">{name}</a>
        <div className="text-center font-archivoNarrow text-lg md:text-2xl font-semibold text-gray-700">${price}</div>
      </div>

      <Transition appear show={showQuickview} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10"
          onClose={() => setShowQuickview(false)}
        >
          <Dialog.Overlay className=" fixed inset-0 bg-zinc-700 opacity-70" />

          <div className="flex max-w-[500px] overflow-y-auto bg-white flex-col absolute right-0 h-full">

            <div className="flex p-4 justify-between border-b">
              <h2 className="text-xl font-archivoNarrow w-full font-semibold text-gray-800">SELECT OPTIONS</h2>
              <FaTimes onClick={() => setShowQuickview(false)} className="cursor-pointer text-xl text-gray-700 hover:text-gray-900" />
            </div>

            <div className="px-4 font-robotoMonoSansSerif ">

              <div className="grid grid-cols-2 gap-2 mt-4 ">
                {images.map((image, idx) => (
                  <img key={idx} src={image} alt={`Product ${idx}`} className="w-full shadow border border-red-950 h-auto" />
                ))}
              </div>
              <h3 className="text-2xl font-medium">{name}</h3>


              <div className="mt-4">
                <label htmlFor="color" className=' text-sm' >Color:</label>
                <div className="flex items-center mt-2 space-x-2" >
                  {colors.map((color, idx) => (

                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8  hover:scale-105 ${color === 'white' ? 'border border-black' : ''}  rounded-full flex flex-col items-center justify-center`}// Agrega posición relativa para el icono
                      style={{ backgroundColor: color }}
                    >
                      {selectedColor === color && (
                        <FaCheck className={` border p-1 text-2xl rounded-full ${selectedColor === 'white' ? 'text-black border-black' : 'text-white'}`} /> // Ajusta la posición del icono
                      )}
                    </button>
                  ))}
                </div>
              </div>


              <div className="mt-4">
                <label htmlFor="size" className="text-sm">Size:</label>
                <div className="flex items-center mt-2 space-x-2">
                  <select
                    id="size"
                    className="px-4 w-28 py-2 border border-gray-500 focus:outline-none"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    {sizes.map((size, idx) => (
                      <option key={idx} value={size} >
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>


              <div className="mt-4">
                <p className="text-sm ">Quantity:</p>

                <div className='flex items-center mt-2 gap-4'>
                  <div className='flex items-center'>
                    <button onClick={decrement} className="px-3 py-2 bg-gray-300 text-gray-700 border border-gray-300  hover:bg-gray-400 focus:outline-none transition-colors duration-300 disabled:opacity-50" disabled={quantity === 1}>-</button>
                    <p className="px-3 py-2 bg-gray-100 text-gray-700 border border-gray-300 ">{quantity}</p>
                    <button onClick={increment} className="px-3 py-2 bg-gray-300 text-gray-700 border border-gray-300  hover:bg-gray-400 focus:outline-none transition-colors duration-300">+</button>
                  </div>

                  <button onClick={addToCart} className="border w-full  border-gray-800 text-black px-4 py-2  hover:bg-gray-900 hover:text-white focus:outline-none ">
                    Add to Cart
                  </button>
                </div>
              </div>




            </div>
            <div className="p-4 gap-3 flex flex-col">

              <button onClick={buyWithPayPal} className="bg-yellow-400 text-center  text-white px-4 py-2 flex items-center  justify-center hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Buy Now with
                <span className="  text-lg italic font-semibold ml-1 tracking-tighter text-blue-500">
                  Pay
                  <span className="text-blue-600 tracking-tighter">Pal</span>
                </span>
              </button>
            </div>

          </div>
        </Dialog>
      </Transition >
    </>
  );
}

export default ProductCard;
