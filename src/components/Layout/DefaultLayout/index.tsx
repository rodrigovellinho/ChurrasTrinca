import { LayoutContainer } from "./styles";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}
