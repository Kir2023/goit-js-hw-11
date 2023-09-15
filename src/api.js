export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '39461021-b78f7fcf8709cf48607b82d85';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};