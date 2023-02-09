import create from "zustand";

const useStore = create((set) => ({
  proxGira: null,
  setProxGira: (gira) => set(() => ({ proxGira: gira })),
  cursos: [],
  setCursos: (cursos) => set(() => ({ cursos: cursos })),
  token: (() => {
    const t = localStorage.getItem("token");
    if (t && typeof t === "string") {
      return t;
    }
    localStorage.removeItem("token");
    return null;
  })(),
  setToken: (token) => set(() => ({ token: token })),
  user: (() => {
    const u = localStorage.getItem("user");
    if (u && typeof u === "string") {
      try {
        const uData = JSON.parse(u);
        return uData;
      } catch (err) {
        localStorage.removeItem("user");
        return null;
      }
    }
    localStorage.removeItem("user");
    return null;
  })(),
  setUser: (user) => set(() => ({ user: user })),
  menu: (() => {
    const m = localStorage.getItem("menu");
    if (m && typeof m === "string") {
      try {
        const mData = JSON.parse(m);
        return mData;
      } catch (err) {
        localStorage.removeItem("menu");
        return [];
      }
    }
    localStorage.removeItem("menu");
    return [];
  })(),
  setMenuItems: (menu) => set(() => ({ menu: menu })),
  calendar: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
  setCalendar: ({ month, year }) => set(() => ({ calendar: { month, year } })),
  selectedCalendarDate: null,
  setSelectedCalendarDate: (d) => set(() => ({ selectedCalendarDate: d })),
  calendarMonthEvents: [],
  setCalendarMonthEvents: (events) =>
    set(() => ({ calendarMonthEvents: events })),
  showCalendarForm: false,
  setShowCalendarForm: (show) => set(() => ({ showCalendarForm: show })),

  groups: [],
  setGroups: (groups) => set(() => ({ groups: groups })),
  users: [],
  setUsers: (users) => set(() => ({ users: users })),
}));

// Facade
export const useProxGira = () => useStore((state) => state.proxGira);
export const usecursos = () => useStore((state) => state.cursos);
export const useSetProxGira = () => useStore((state) => state.setProxGira);
export const useSetCursos = () => useStore((state) => state.setCursos);

export const useToken = () => useStore((state) => state.token);
export const useSetToken = () => useStore((state) => state.setToken);
export const useUser = () => useStore((state) => state.user);
export const useSetUser = () => useStore((state) => state.setUser);
export const useMenu = () => useStore((state) => state.menu);
export const useSetMenuItems = () => useStore((state) => state.setMenuItems);
export const useCalendar = () => useStore((state) => state.calendar);
export const useSetCalendar = () => useStore((state) => state.setCalendar);

export const useSelectedCalendarDate = () =>
  useStore((state) => state.selectedCalendarDate);
export const useSetSelectedCalendarDate = () =>
  useStore((state) => state.setSelectedCalendarDate);
export const useCalendarMonthEvents = () =>
  useStore((state) => state.calendarMonthEvents);
export const useSetCalendarMonthEvents = () =>
  useStore((state) => state.setCalendarMonthEvents);
export const useShowCalendarForm = () =>
  useStore((state) => state.showCalendarForm);
export const useSetShowCalendarForm = () =>
  useStore((state) => state.setShowCalendarForm);

export const useGroups = () => useStore((state) => state.groups);
export const useSetGroups = () => useStore((state) => state.setGroups);
export const useUsers = () => useStore((state) => state.users);
export const useSetUsers = () => useStore((state) => state.setUsers);
