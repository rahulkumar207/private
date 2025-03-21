import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation, sidebarClick } from "../utils";
import ScrollTop from "./ScrollTop";
import DefaultFooter from "./footer/DefaultFooter";
import Header from "./header/Header";
import SideBar from "./header/SideBar";
const Layout = ({ children, header, footer, singleMenu, dark }) => {
  useEffect(() => {
    animation();
    sidebarClick();
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} singleMenu={singleMenu} dark={dark} />
        <SideBar />
        {children}
        <DefaultFooter footer={footer} dark={dark} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
