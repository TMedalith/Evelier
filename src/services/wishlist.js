// product.js
import { getItems, createItem, updateItem, deleteItem, getItemById } from './api';

export const getProducts = getItems('wishlist');
export const getProductById = getItemById('products');
export const createProduct = createItem('products');
export const updateProduct = updateItem('products');
export const deleteProduct = deleteItem('products');
