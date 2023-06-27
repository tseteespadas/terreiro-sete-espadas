import CentroDeConhecimentoConteiner from "./Conteiner";
import NavigationCard from "../../../components/v2/cards/NavigationCard";
import { DashboardCardConteiner } from "../dashboard/Conteiner";

export default function KnowledgeCenter({ submenus }) {
  return (
    <CentroDeConhecimentoConteiner>
      <DashboardCardConteiner>
        {submenus.map((submenuItem) => {
          return (
            <NavigationCard
              key={submenuItem.path}
              path={submenuItem.path}
              icon={submenuItem.icon}
              name={submenuItem.name}
              description={submenuItem.description}
            />
          );
        })}
      </DashboardCardConteiner>
    </CentroDeConhecimentoConteiner>
  );
}
