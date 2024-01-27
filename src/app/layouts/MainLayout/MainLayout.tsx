import { Outlet } from "react-router-dom";

import { MainWrapper } from "./MainLayout.styled";

const MainLayout = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  );
};

export default MainLayout;
