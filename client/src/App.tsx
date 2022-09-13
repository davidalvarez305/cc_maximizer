import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import useFetch from "./hooks/useFetch";
import PrimaryLayout from "./layout/Primary";

export const App = () => {
  const ctx = useContext(UserContext);

  const { makeRequest } = useFetch();

  return <PrimaryLayout />;
};
