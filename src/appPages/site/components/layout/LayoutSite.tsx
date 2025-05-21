"use client";
import { FC, ReactNode} from "react";
import scss from "./LayoutSite.module.scss";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@/ui/modal/Modal";

interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1600);
  // }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className={scss.LayoutSite}>
      <ToastContainer />
      <Header />
      <Modal />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
