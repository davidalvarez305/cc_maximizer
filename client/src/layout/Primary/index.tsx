import Sidebar from "../../components/Sidebar";
import TopNavigation from "../../components/TopNavigation";
import SecondaryButton from "../../components/SecondaryButton";
import Footer from "../../components/Footer";
import "./PrimaryLayout.css";

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
            title={"Yo yo"}
            searchIcon={"Yo yo"}
            typeToSearch={"Yo yo"}
            img={"Yo yo"}
            iconButton={"Yo yo"}
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
