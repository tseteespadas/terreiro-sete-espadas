import React from "react";

import Header from "../../compositions/areaLogada/header";
import Calendar from "../../compositions/areaLogada/calendar/Calendar";
import CalendarConteiner from "../../compositions/areaLogada/calendar/Conteiner";


export default function Calendario() {
  return (
    <>
      <Header />
      <CalendarConteiner>
        <Calendar />
      </CalendarConteiner>
    </>
  );
}
