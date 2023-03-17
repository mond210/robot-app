import React from "react";

import ControlButton from "components/buttons/control-button";
import NavigationButton from "components/buttons/navigation-button";
import ProfileButton from "components/buttons/profile-button";
import { ButtonColors } from "union-types/button-color";
import { IconNames } from "union-types/icon-name";
import IconButton from "components/buttons/icon-button";
import { IconColors } from "union-types/icon-color";
import {
  useControlPanel,
  useControlPanelIndex,
  useMainMenuIndex,
} from "hooks/use-context";

const SideNavigation = () => {
  const [controlPanel, setControlPanel] = useControlPanel();
  const [controlPanelIndex, setControlPanelIndex] = useControlPanelIndex();
  const [mainMenuIndex, setMainMenuIndex] = useMainMenuIndex();
  const clickEnableButtonHandler = (index: number) => {
    if (index === controlPanelIndex) setControlPanel(!controlPanel);
    else setControlPanelIndex(index);
    //TODO: API Connect to Enable Switch
  };
  const clickMenuButtonHandler = (index: number) => {
    if (index !== mainMenuIndex) setMainMenuIndex(index);
  };
  const controlButtonProps = [
    {
      iconName: IconNames.control_camera,
    },
    {
      iconName: IconNames.location_on,
    },
    {
      iconName: IconNames.code,
    },
  ];
  const menuButtonProps = [
    {
      label: "Dashboard",
      iconName: IconNames.dashboard,
    },
    {
      label: "Message",
      iconName: IconNames.chat,
    },
    {
      label: "Work",
      iconName: IconNames.precision_manufacturing,
    },
    {
      label: "Setup",
      iconName: IconNames.settings,
    },
  ];
  const controlButtonElements = controlButtonProps.map((prop, index) => {
    return (
      <ControlButton
        key={index}
        iconName={prop.iconName}
        buttonColor={
          index === controlPanelIndex
            ? controlPanel
              ? ButtonColors["primary-inverse"]
              : ButtonColors["tertiary-inverse"]
            : ButtonColors["white"]
        }
        visible={controlPanel || index === controlPanelIndex}
        onClick={() => clickEnableButtonHandler(index)}
      />
    );
  });

  const menuButtonElements = menuButtonProps.map((prop, index) => {
    return (
      <NavigationButton
        key={index}
        label={prop.label}
        iconName={prop.iconName}
        selected={index === mainMenuIndex}
        onClick={() => clickMenuButtonHandler(index)}
      />
    );
  });

  return (
    <div className="flex flex-col items-center h-full pt-8">
      <div
        className={`flex flex-col flex-grow-0 mb-8 items-center bg-white dark:bg-black rounded-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]`}
      >
        {controlButtonElements}
      </div>
      <div className="flex-grow flex flex-col items-center">
        {menuButtonElements}
      </div>
      <div className="flex-grow-0 flex flex-col items-center">
        <IconButton iconColor={IconColors.black}></IconButton>
        <ProfileButton></ProfileButton>
      </div>
    </div>
  );
};

export default SideNavigation;
