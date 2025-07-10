import React from "react";
import { useLocation, Redirect } from "react-router-dom";

import Header from "../compositions/Header";
import RituaisComposition from "../compositions/rituais";
import rituais from "../data/rituais";

export default function Rituais() {
  const { pathname } = useLocation();
  const ritual = rituais.find(({ link }) => link === pathname);
  if (ritual) {
    return (
      <>
        <Header headerTitle={`${ritual.nameFull}`} withLink />
        <RituaisComposition ritual={ritual} />
      </>
    );
  }
  return <Redirect to="/rituais" />;
}
