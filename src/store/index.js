import create from 'zustand';

const useStore = create(set => ({
  proxGira: null,
  cursos: [],
  setProxGira: (gira) => set(() => ({proxGira: gira}) ),
  setCursos: (cursos) => set(() => ({cursos: cursos}) ),
}));

// Facade
export const useProxGira = () => useStore((state) => state.proxGira);
export const usecursos = () => useStore((state) => state.cursos);
export const useSetProxGira = () => useStore((state) => state.setProxGira);
export const useSetCursos = () => useStore((state) => state.setCursos);
