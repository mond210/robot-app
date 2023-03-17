import TopAppBar from "components/app-bars/top-app-bar";
import IconButton from "components/buttons/icon-button";
import TabContainer from "components/tabs/tab-container";
import TabElement, { tabProps } from "components/tabs/tab-element";
import React from "react";
import { IconColors } from "union-types/icon-color";
import { IconNames } from "union-types/icon-name";

const WorkLayout = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  var workTabProps: tabProps[] = [
    {
      primary: true,
      icon: true,
      iconName: IconNames.folder,
      fixed: true,
      label: "File",
    },
    {
      primary: true,
      icon: true,
      iconName: IconNames.location_on,
      fixed: true,
      label: "Point",
    },
    {
      primary: true,
      icon: true,
      iconName: IconNames.code,
      fixed: true,
      label: "Script",
    },
    {
      primary: true,
      icon: true,
      iconName: IconNames.play_arrow,
      fixed: true,
      label: "Run",
    },
  ];
  const workTabs = workTabProps.map((props, index) => {
    return (
      <TabElement
        primary={props.primary}
        fixed
        key={index}
        label={props.label}
        selected={index === currentIndex}
        icon={props.icon}
        iconName={props.iconName}
        onClick={() => {
          setCurrentIndex(index);
        }}
      ></TabElement>
    );
  });
  return (
    <div className="">
      <TabContainer>{workTabs}</TabContainer>
    </div>
  );
};

export default WorkLayout;
