import React from "react";
import TopAppBar from "components/app-bars/top-app-bar";
import IconButton from "components/buttons/icon-button";
import TabContainer from "components/tabs/tab-container";
import TabElement, { tabProps } from "components/tabs/tab-element";
import { buttonSize } from "union-types/button-size";
import { IconColors } from "union-types/icon-color";
import { IconNames } from "union-types/icon-name";
import ControlMonitorValue from "./control-monitor-value";
import ControlSettingJog from "./control-setting-jog";
import ControlSettingTCP from "./control-setting-tcp";
import ControlSettingCoord from "./control-setting-coord";
import ControlSettingIO from "./control-setting-io";
import { useControlPanel } from "hooks/use-context";

const ControlSetting = () => {
  const [controlPanel, setControlPanel] = useControlPanel();
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  var settingTabProps: tabProps[] = [
    {
      primary: false,
      icon: false,
      fixed: true,
      label: "Jog",
      content: <ControlSettingJog />,
    },
    {
      primary: false,
      icon: false,
      fixed: true,
      label: "TCP",
      content: <ControlSettingTCP />,
    },
    {
      primary: false,
      icon: false,
      fixed: true,
      label: "Coord",
      content: <ControlSettingCoord />,
    },
    {
      primary: false,
      icon: false,
      fixed: true,
      label: "I/O",
      content: <ControlSettingIO />,
    },
  ];
  const settingTabs = settingTabProps.map((props, index) => {
    return (
      <TabElement
        primary={props.primary}
        fixed
        key={index}
        label={props.label}
        selected={index === currentIndex}
        icon={props.icon}
        onClick={() => {
          setCurrentIndex(index);
        }}
      ></TabElement>
    );
  });

  return (
    <div className="bg-background-original dark:bg-background-dark-original rounded-lg h-full">
      <TopAppBar>
        <IconButton
          iconName={IconNames.settings}
          iconColor={IconColors.black}
          size={buttonSize.tiny}
          bgActive={false}
        />
        <div className="flex-grow text-lg">Control Setting</div>
        <IconButton
          iconName={IconNames.lock_open}
          iconColor={IconColors.black}
          size={buttonSize.tiny}
          bgActive={false}
        />
        <IconButton
          iconName={IconNames.close}
          iconColor={IconColors.black}
          size={buttonSize.tiny}
          bgActive={false}
          onClick={() => {
            setControlPanel(!controlPanel);
          }}
        />
      </TopAppBar>
      <TabContainer>{settingTabs}</TabContainer>
      <div className="">{settingTabProps[currentIndex].content}</div>
    </div>
  );
};
export default ControlSetting;
