import React, { FC } from "react";
import { hot } from "react-hot-loader/root";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Sidebar from "./components/Sidebar";

const client = new ApolloClient({
  uri: "http://api.dev.lobox.com/lookup/graphql",
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Sidebar />
    </ApolloProvider>
  );
};

export default hot(App);
