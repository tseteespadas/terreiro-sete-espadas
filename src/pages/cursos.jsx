import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';

import Header from "../compositions/Header";
import CursosComposition from "../compositions/cursos";
import cursos from "../data/cursos";

export default function Cursos() {
  const { pathname } = useLocation();
  const curso = cursos.find(({link}) => link === pathname);
  if (curso) {
    return (
      <>
        <Header headerTitle={`Curso ${curso.name}`} withLink />
        <CursosComposition curso={curso} />
      </>
    )
  }
  return <Redirect to="/cursos"/>
  
}
