import React, { useState, useEffect } from "react";

import NavigationCard from "../../components/v2/cards/NavigationCard";
import DashboardConteiner, {
  DashboardCardConteiner,
} from "../../compositions/areaLogada/dashboard/Conteiner";
import Header from "../../compositions/areaLogada/header";

import {
  useMenu,
  useUser,
  useSetUser,
  useToken,
  useSetToken,
  useSetUsers,
  useSetGroups,
  useSetPaymentGroups,
} from "../../store";

import { fetchData } from "../../api";

export default function Dashboard() {
  const [error, setError] = useState(null);

  const menuItems = useMenu();
  const user = useUser();

  const token = useToken();
  const setToken = useSetToken();
  const setUser = useSetUser();
  const setUsers = useSetUsers();
  const setGroups = useSetGroups();
  const setPaymentGroups = useSetPaymentGroups();

  // cacheando dados
  useEffect(() => {
    if (user.role === "admin") {
      fetchData(
        {
          setError,
          setToken,
          setUser,
          setUsers,
          setGroups,
          setPaymentGroups,
        },
        token
      );
    }
  }, [token]);

  return (
    <>
      <Header />
      <DashboardConteiner>
        <DashboardCardConteiner>
          {menuItems.map((item) => {
            return (
              <NavigationCard
                key={`nav-card-${item.name}`}
                {...item}
              ></NavigationCard>
            );
          })}
        </DashboardCardConteiner>
      </DashboardConteiner>
      <div className="footer"></div>
    </>
  );
}
