import React from 'react';

import Menu from '../compositions/Menu';
import Header from '../compositions/Header';
import Giras from '../compositions/giras/Giras';

import menuItems from "../data/menuItems.json"; 

export default function GirasPage() {
  return (
    <>
      <Menu menuItems={menuItems.giras}/>
      <Header />
      <Giras />
    </>
  );
}
