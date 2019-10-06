import axios from 'axios';

const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const idSearcUrl = 'https://api.mercadolibre.com/items/';
const limit = 10;

export const getProductsByName = (productName) => {
    return axios.get(`${baseUrl}${productName}&limit=${limit}`);
}

export const getInitialSearch = () => {
    return axios.get(`${baseUrl}iphone 8&limit=${limit}`);
}

export const getProductById = (id) => {
    return axios.get(`${idSearcUrl}${id}`);
}

export const getDetailProductById = (id) => {
    return axios.get(`${idSearcUrl}${id}/description`);
}
