import axios from 'axios';

const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const limit = 4;

export const getProductsByName = (productName) => {
    return axios.get(`${baseUrl}${productName}&limit=${limit}`);
}

export const getInitialSearc = () => {
    return axios.get(`${baseUrl}skate&limit=${limit}`);
}