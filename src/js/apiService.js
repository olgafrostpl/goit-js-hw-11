import axios from 'axios';

const API_KEY = '38252745-ed1ecb0c5523ad9ae79ae57dc';
const API_URL = 'https://pixabay.com/api/';

export default async function fetchImages(query, page) {
  const params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
    q: query,
  };
  const response = await axios.get(API_URL, {params});
 
  return response.data;
}

