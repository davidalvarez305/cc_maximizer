import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import useFetch from "./hooks/useFetch";

export const App = () => {
  const ctx = useContext(UserContext);

  const { makeRequest } = useFetch();

  return <div>Yo yo!</div>;
};
