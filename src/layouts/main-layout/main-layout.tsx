import React from "react";
import OuterAppBar from "components/app-bars/outer-app-bar";
import SideNavigation from "components/navigations/side-navigation";
import { useControlPanel, useMainMenuIndex } from "hooks/use-context";
import ControlLayout from "layouts/control-layout/control-layout";
import DashboardLayout from "layouts/dashboard-layout/dashboard-layout";
import MessageLayout from "layouts/message-layout/messge-layout";
import WorkLayout from "layouts/work-layout/work-layout";
import SetupLayout from "layouts/setup-layout/setup-layout";

const MainLayout = () => {
  const [controlPanel] = useControlPanel();
  const [mainMenuIndex] = useMainMenuIndex();
  const bodyElements = [
    <DashboardLayout />,
    <MessageLayout />,
    <WorkLayout />,
    <SetupLayout />,
  ];
  return (
    <div className="bg-primary-container dark:bg-primary-dark-container grid grid-rows-[64px_minmax(200px,_1fr)] grid-cols-[80px_minmax(200px,_1fr)] h-screen w-screen text-neutral-900 dark:text-neutral-100  overflow-hidden">
      <div className="col-span-2 max-h-fit">
        <OuterAppBar></OuterAppBar>
      </div>
      <div className="">
        <SideNavigation></SideNavigation>
      </div>
      <div className="relative bg-background-original dark:bg-background-dark-original h-full rounded-tl-lg rounded-bl-lg drop-shadow-[-2px_-2px_2px_rgba(0,0,0,0.25)]">
        {bodyElements[mainMenuIndex]}
        <ControlLayout show={controlPanel}></ControlLayout>
      </div>
    </div>
  );
};

export default MainLayout;
