import React from "react";
import TopAppBar from "components/app-bars/top-app-bar";
import IconButton from "components/buttons/icon-button";
import TabContainer from "components/tabs/tab-container";
import TabElement, { tabProps } from "components/tabs/tab-element";
import { buttonSize } from "union-types/button-size";
import { IconColors } from "union-types/icon-color";
import { IconNames } from "union-types/icon-name";
import ControlMonitorValue from "./control-monitor-value";
import ControlMonitorPreview from "./control-monitor-preview";
import { useControlPanel } from "hooks/use-context";

const ControlMonitor = () => {
  const [controlPanel, setControlPanel] = useControlPanel();
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const monitorTabProps: tabProps[] = [
    {
      primary: false,
      icon: false,
      fixed: true,
      label: "Value",
      content: <ControlMonitorValue />,
    },
    {
      primary: false,
      icon: false,
      fixed: true,
      label: "Preview",
      content: <ControlMonitorPreview />,
    },
  ];
  const monitorTabs = monitorTabProps.map((props, index) => {
    return (
      <TabElement
        primary={props.primary}
        fixed
        key={index}
        label={props.label}
        icon={props.icon}
        selected={index === currentIndex}
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
          iconName={IconNames.precision_manufacturing}
          iconColor={IconColors.black}
          size={buttonSize.tiny}
          bgActive={false}
        />
        <div className="flex-grow text-lg font-medium">RobotA</div>
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
          onClick={() => setControlPanel(false)}
        />
      </TopAppBar>
      <TabContainer>{monitorTabs}</TabContainer>
      <div className="h-full min-h-0 overflow-y-auto">
        {monitorTabProps[currentIndex].content}
      </div>
    </div>
  );
};
export default ControlMonitor;
