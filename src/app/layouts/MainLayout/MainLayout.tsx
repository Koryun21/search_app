import { MainWrapper } from "./MainLayout.styled";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  );
};

export default MainLayout;
