import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function WishList() {
     const [wishList, setWishList] = useState([]);

    return (
        <div>
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">WishList</h1>

                {wishList.length === 0 ? (
                    <p>No hay productos en tu lista de deseos.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wishList.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-semibold mb-2">{item.product.name}</h2>
                                <p className="text-gray-700 mb-2">${item.product.price}</p>
                                <p className="text-gray-500">{item.product.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default WishList;
