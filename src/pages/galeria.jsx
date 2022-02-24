import React from 'react';

import Menu from '../compositions/Menu';
import Header from "../compositions/Header";
import Galeria from "../compositions/galeria/Galeria";

import menuItems from "../data/menuItems.json"; 

export default function GaleriaPage() {
  return (
    <>
      <Menu menuItems={menuItems.giras}/>
      <Header />
      <Galeria />
    </>
  )
}
