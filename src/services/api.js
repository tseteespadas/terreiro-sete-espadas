import axios from 'axios';

export const apiCursos = axios.create({
  baseURL: "https://script.google.com/macros/s/AKfycbx6YZal1sP6OJfAGBKQ-4faVs-JSU_NNHOmaix73IQXixaf_eAJJUZKSwCXuCdzJgCQ",
});

export const apiInscricao = axios.create({
  baseURL: ""
});
