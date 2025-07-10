import React from "react";
import { QueryClient } from "react-query";

import Ritual from "../../components/v2/rituais";
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

export default function Rituais(props) {
  const { ritual } = props;
  return (
    <QueryProvider client={queryClient}>
      <CoursesSection>
        <Ritual ritual={ritual}>
          <ritual.Desc />
        </Ritual>
      </CoursesSection>
    </QueryProvider>
  );
}
