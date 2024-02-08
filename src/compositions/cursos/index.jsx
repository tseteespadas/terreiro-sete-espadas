import React from "react";
import { QueryClient } from "react-query";

import Curso from "../../components/v2/curso";
import CoursesSection from "../../components/v2/conteiners/CoursesSection";

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
      <CoursesSection>
        <Curso curso={curso}>
          <curso.Desc />
        </Curso>
      </CoursesSection>
    </QueryProvider>
  );
}
