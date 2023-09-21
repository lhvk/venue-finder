import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { ContentWrapper, PageContainer } from "./styled";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MOBILE } from "../../config";

export default function Layout() {
  const isMobile = useMediaQuery(MOBILE);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <PageContainer>
      <ContentWrapper>
        <Header
          isMobile={isMobile}
          isHomePage={isHomePage}
        />
        <Outlet />
      </ContentWrapper>
      <Footer isMobile={isMobile} />
    </PageContainer>
  );
}
