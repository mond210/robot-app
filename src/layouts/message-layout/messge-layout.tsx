import TabContainer from "components/tabs/tab-container";
import TabElement, { tabProps } from "components/tabs/tab-element";
import React from "react";
import { IconNames } from "union-types/icon-name";

const MessageLayout = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  var messageTabProps: tabProps[] = [
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
      iconName: IconNames.chat,
      fixed: true,
      label: "Message",
    },
  ];
  const messageTabs = messageTabProps.map((props, index) => {
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
      <TabContainer>{messageTabs}</TabContainer>
    </div>
  );
};

export default MessageLayout;
