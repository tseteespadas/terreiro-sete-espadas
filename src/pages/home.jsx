import React from 'react';


import Menu from '../compositions/Menu';
import Header from '../compositions/Header';
import Terreiro from '../compositions/home/Terreiro';
import Lucas from '../compositions/home/Lucas';
import Fiama from '../compositions/home/Fiama';
import Umbanda from '../compositions/home/Umbanda';
import TerreiroResiste from '../compositions/home/TerreiroResiste';
import Cursos from '../compositions/home/Cursos';
import Giras from '../compositions/home/Giras';
import AtendimentoParticular from '../compositions/home/AtendimentoParticular';
import Contato from '../compositions/home/Contato';

import menuItems from "../data/menuItems.json"; 

export default function HomePage() {
  return (
    <>
      <Menu menuItems={menuItems.home}/>
      <Header />
      <Terreiro />
      <Lucas />
      <Fiama />
      <Umbanda />
      <TerreiroResiste />
      <Cursos />
      <Giras />
      <AtendimentoParticular />
      <Contato />
    </>
  );
}
