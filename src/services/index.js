import { apiCursos, apiInscricao } from './api';

function wait(m) {
  return new Promise(r => setTimeout(r, m))
}

async function subscribe( data, attempt = 1) {
  try {
    return await apiInscricao.post(`/exec`, data);
  } catch (e) {
    console.error(e);
    if (attempt < 5) {
      wait(2000);
      return subscribe( data, attempt + 1);
    } else {
      throw new Error("Falha ao tentar inscrever. Entre em contato com tseteespadas@gmail.com");
    }
  }
}

export {
  getCourses,
  subscribe
}