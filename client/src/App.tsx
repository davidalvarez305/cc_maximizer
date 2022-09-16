import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { UserContext } from "./context/UserContext";
import useFetch from "./hooks/useFetch";
import PrimaryLayout from "./layout/Primary";

export const App = () => {
  const ctx = useContext(UserContext);

  const { makeRequest } = useFetch();

  {/* <PrimaryLayout>
      <div className="title">
        <h1 className="title-1 heading--h1">{"Main Content Goes Here"}</h1>
        <p className="apply-today-and-star x14px--regular">
          {"YUH YUH"}
        </p>
      </div>
    </PrimaryLayout> */}

  return (
    <Sidebar />
  );
};
