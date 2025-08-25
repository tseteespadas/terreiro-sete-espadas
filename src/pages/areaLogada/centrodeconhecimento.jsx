import React from "react";
import { useParams } from "react-router";
import Header from "../../compositions/areaLogada/header";
import KnowledgeCenter from "../../compositions/areaLogada/knowledge-center/KnowledgeCenter";
import Playlists from "../../compositions/areaLogada/knowledge-center/playlists/Playlists";

import { useMenu } from "../../store";
import Footer from "../../compositions/Footer";

const ContentMapper = (content) => {
  if (content === "playlists") {
    return <Playlists />;
  }
  return null;
};

export default function CentroDeConhecimento() {
  const params = useParams();
  const menuItems = useMenu();
  const { content } = params;
  const knowledgeCenterMenuItem = menuItems.find(
    (item) => item.path === location.pathname
  );

  if (content) {
    return (
      <>
        <Header />
        {ContentMapper(content)}
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <KnowledgeCenter submenus={knowledgeCenterMenuItem.subitems} />
      <Footer />
    </>
  );
}
