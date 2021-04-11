import axios from 'axios';
import md5 from 'md5';

export const timestamp = Date.now();
export const apiKey = process.env.REACT_APP_API_PUBLIC_MARVEL;
const privateKey = process.env.REACT_APP_API_PRIVATE_MARVEL;
const urlBase = process.env.REACT_APP_API_MARVEL;
export const hash = md5(`${timestamp}${privateKey}${apiKey}`);
export const limit = '100';

const urlBaseTEste = process.env.REACT_APP_API_MARVEL_TESTE;

export const url = `${urlBase}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

export const apiMarvel = axios.create({
  baseURL: urlBaseTEste,
});
