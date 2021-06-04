import axios from 'axios';

export const apiCursos = axios.create({
  baseURL: "https://script.google.com/macros/s/AKfycbxblqOq1KODBqhQBZmJY792gHAzGzZuo__nhEw_d0LAXp_eZl4qfmT5n7YVaqid_CAP",
});

export const apiInscricao = axios.create({
  baseURL: ""
});
