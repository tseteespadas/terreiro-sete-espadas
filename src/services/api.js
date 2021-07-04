import axios from 'axios';

export const apiCursos = axios.create({
  baseURL: "https://script.google.com/macros/s/AKfycbwDVaZcYCZotyIGpNoJkBxI6H_JbhqX0tsLOOeX_fh8r35sJFj-fyVPQvYCewuLySNo",
});

export const apiInscricao = axios.create({
  baseURL: "https://script.google.com/macros/s/AKfycbwbcVWrRRyWj3BrD2XHJVMPvYeRVh07P_7V9Yh8DAdM4r-s4ws355GMmrFAfDmwqzjs"
});
