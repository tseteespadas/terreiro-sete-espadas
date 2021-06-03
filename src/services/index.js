import { apiCursos, apiInscricao } from './api';

function wait(m) {
  return new Promise(r => setTimeout(r, m))
}

async function getCourses( curso, attempt = 1) {
  try {
    let response;
    if (curso) {
      response = await apiCursos.get(`/exec?curso=${curso}`);
    } else {
      response = await apiCursos.get('/exec');
    }
    return response.data;
  } catch (e) {
    console.error(e);
    if (attempt < 5) {
      wait(2000);
      return getCourses(curso, attempt + 1);
    } else {
      throw new Error("Falha ao carregar os cursos...");
    }
  }
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