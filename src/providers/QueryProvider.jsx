import { QueryClientProvider } from "react-query";

export default function QueryProvider(props) {
  const { client } = props;
  return (
    <QueryClientProvider client={client}>
      {props.children}
    </QueryClientProvider>
  )
}