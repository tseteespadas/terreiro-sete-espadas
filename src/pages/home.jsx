import React from "react";

import Menu from "../compositions/Menu";
import Header from "../compositions/Header";
import Terreiro from "../compositions/home/Terreiro";
import Lucas from "../compositions/home/Lucas";
import Fiama from "../compositions/home/Fiama";
import Umbanda from "../compositions/home/Umbanda";
import TerreiroResiste from "../compositions/home/TerreiroResiste";
import Cursos from "../compositions/home/Cursos";
import Giras from "../compositions/home/Giras";
import AtendimentoParticular from "../compositions/home/AtendimentoParticular";
import Contato from "../compositions/home/Contato";
import Footer from "../compositions/Footer";

import menuItems from "../data/menuItems.json";
import Apoie from "../compositions/home/Apoie";
import Evento from "../compositions/home/events/Evento";
import PixReforma from "../compositions/home/events/PixReforma";

export default function HomePage() {
  return (
    <>
      <Menu menuItems={menuItems.home} />
      <Header />
      <Evento />
      {/* <PixReforma /> */}
      <Terreiro />
      <Lucas />
      <Fiama />
      <Umbanda />
      <AtendimentoParticular />
      <TerreiroResiste />
      <Cursos />
      <Giras />
      <Apoie />
      <Contato />
      <Footer />
    </>
  );
}
