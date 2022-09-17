import Sidebar from "../../components/Sidebar";
import TopNavigation from "../../components/TopNavigation";
import SecondaryButton from "../../components/SecondaryButton";
import Footer from "../../components/Footer";
import "./PrimaryLayout.css";
import { SearchIcon } from "../../assets/SearchIcon";

interface Props {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container-center-horizontal">
      <div className="accounts-empty screen">
        <Sidebar />
        <div className="flex-col">
          <TopNavigation
            screenName={"Welcome"}
            searchIcon={<SearchIcon />}
            img={
              "https://southfloridaathleticclub.s3.amazonaws.com/media/misc/default.webp"
            }
            handleNavigationSubmit={(values) => console.log(values)}
          />
          <div className="overlap-group1">{children}</div>
          <SecondaryButton icon={""} label={""} />
          <Footer
            privacyPolicy={"/privacy-policy"}
            license={"/license"}
            api={"/api"}
            helpCenter={"/helpCenter"}
            x2022AllRightsRe={"/x2022AllRightsRe"}
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryLayout;
