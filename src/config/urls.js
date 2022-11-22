export const API_BASE_URL = 'https://dummyjson.com/'

export const getApiUrl = (endPoint) => API_BASE_URL + endPoint;

export const PRODUCTS = getApiUrl("products");