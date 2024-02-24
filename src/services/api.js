// api.js
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const getItems = (endpoint) => async () => {
  try {
    const response = await axios.get(`${baseUrl}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Hubo un error al obtener los items de ${endpoint}:`, error);
  }
};

export const createItem = (endpoint) => async (item) => {
  try {
    const response = await axios.post(`${baseUrl}/${endpoint}`, item);
    return response.data;
  } catch (error) {
    console.error(`Hubo un error al crear el item en ${endpoint}:`, error);
  }
};

export const updateItem = (endpoint) => async (id, item) => {
  try {
    const response = await axios.put(`${baseUrl}/${endpoint}/${id}`, item);
    return response.data;
  } catch (error) {
    console.error(`Hubo un error al actualizar el item en ${endpoint}:`, error);
  }
};

export const deleteItem = (endpoint) => async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Hubo un error al eliminar el item en ${endpoint}:`, error);
  }
};

export const getItemById = (endpoint) => async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Hubo un error al obtener el item en ${endpoint}:`, error);
  }
};

export const getItemsByTitle = (endpoint) => async (title) => {
  try {
    const response = await axios.get(`${baseUrl}/${endpoint}?title_like=${title}`);
    return response.data;
  } catch (error) {
    console.error(`Hubo un error al obtener los items en ${endpoint}:`, error);
  }
}