import React from 'react';

import Header from '../components/Header';
import Terreiro from '../components/Terreiro';
import Lucas from '../components/Lucas';
import Fiama from '../components/Fiama';
import Umbanda from '../components/Umbanda';
import Galeria from '../components/Galeria';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import Cursos from '../components/Cursos';

function Home() {

  return (
    <>
      <Header />
      <Terreiro />
      <Lucas />
      <Fiama />
      <Umbanda />
      <Cursos />
      <Contato />
      <Galeria />
      <Footer />
    </>
  );
}

export default Home;
