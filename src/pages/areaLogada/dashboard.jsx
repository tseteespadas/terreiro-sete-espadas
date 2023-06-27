import React, { useEffect } from "react";

import NavigationCard from "../../components/v2/cards/NavigationCard";
import DashboardConteiner, { DashboardCardConteiner } from "../../compositions/areaLogada/dashboard/Conteiner";
import Header from "../../compositions/areaLogada/header";

import { useMenu } from "../../store";

export default function Dashboard() {
  const menuItems = useMenu();
  return (
    <>
      <Header />
      <DashboardConteiner>
        <DashboardCardConteiner>
          {menuItems.map((item) => {
            return <NavigationCard key={`nav-card-${item.name}`} {...item}></NavigationCard>;
          })}
        </DashboardCardConteiner>
      </DashboardConteiner>
      <div class="footer"></div>
    </>
  );
}
