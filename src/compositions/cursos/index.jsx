import React from "react";
import { QueryClient } from "react-query";

import Curso from "../../components/v2/curso";
import Section from "../../components/v2/conteiners/Section";

import QueryProvider from "../../providers/QueryProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // retryDelay: attemptIndex => attemptIndex * 1200000,
    },
  },
});

export default function Cursos(props) {
  const { curso } = props;
  return (
    <QueryProvider client={queryClient}>
      <Section>
        <Curso curso={curso}>
          <curso.Desc />
        </Curso>
      </Section>
    </QueryProvider>
  )
}