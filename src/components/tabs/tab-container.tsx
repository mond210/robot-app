import React, { PropsWithChildren } from "react";
import { tabProps } from "./tab-element";

interface props {
  icon?: boolean;
  primary?: boolean;
}
const TabContainer = (props: PropsWithChildren<props>) => {
  React.Children.forEach(props.children, (c) => {
    if (!React.isValidElement<tabProps>(c)) {
      throw new Error(`Not valid tabElement props: ${c}`);
    }
  });

  return (
    <ul className="flex h-fit w-full items-center relative" role="tablist">
      {props.children}
    </ul>
  );
};
export default TabContainer;
