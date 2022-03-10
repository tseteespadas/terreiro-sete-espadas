import { QueryClient } from "react-query";

import GiraInfo from './GiraInfo';
import InscricaoGira from './InscricaoGira';

import QueryProvider from "../../../providers/QueryProvider";

const queryClient = new QueryClient();

export default function ProxGira() {
  return (
    <QueryProvider client={queryClient}>
      <GiraInfo />
      <InscricaoGira />
    </QueryProvider>
  );
}
