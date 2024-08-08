import { useMediaQuery } from "react-responsive";
import Header from "./Header";
import DropdownMenu from "./DropdownMenu";

const Topbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return <div>{isMobile ? <DropdownMenu /> : <Header />}</div>;
};

export default Topbar;
