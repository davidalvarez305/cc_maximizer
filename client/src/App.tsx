import useFetch from "./hooks/useFetch";
import useLoginRequired from "./hooks/useLoginRequired";
import PrimaryLayout from "./layout/Primary";

export const App = () => {
  useLoginRequired()

  const { makeRequest } = useFetch();

  return (
    <PrimaryLayout screenName="Home">
      <div className="title">
        <h1 className="title-1 heading--h1">{"Main Content Goes Here"}</h1>
        <p className="apply-today-and-star x14px--regular">{"YUH YUH"}</p>
      </div>
    </PrimaryLayout>
  );
};
